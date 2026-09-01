import { Request, Response } from "express";
import { z } from "zod";
import { initiateStkPush } from "../services/mpesaService";

const stkPushSchema = z.object({
  phoneNumber: z
    .string()
    .min(9, "Enter a valid M-Pesa phone number")
    .regex(/^(?:\+?254|0)?[71]\d{8}$/, "Enter a valid Safaricom number, e.g. 0712345678"),
  amount: z.number().positive("Amount must be greater than 0"),
  accountReference: z.string().max(40).optional(),
  description: z.string().max(60).optional(),
});

export async function createStkPush(req: Request, res: Response) {
  const parsed = stkPushSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid request",
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  const { phoneNumber, amount, accountReference, description } = parsed.data;

  try {
    const result = await initiateStkPush({
      phoneNumber,
      amount,
      accountReference: accountReference ?? "Giving",
      transactionDesc: description ?? "Church Giving",
    });

    return res.status(200).json({
      message: result.CustomerMessage,
      checkoutRequestId: result.CheckoutRequestID,
      merchantRequestId: result.MerchantRequestID,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("STK push failed:", error);
    return res.status(502).json({
      message:
        "We couldn't reach M-Pesa right now. Please check the number and try again shortly.",
    });
  }
}

/**
 * Safaricom calls this URL once the customer completes (or cancels) the
 * STK push prompt on their phone. Store the result against the checkout
 * request ID so the frontend can poll for status, or notify via websockets.
 */
export function mpesaCallback(req: Request, res: Response) {
  // eslint-disable-next-line no-console
  console.log("M-Pesa callback received:", JSON.stringify(req.body, null, 2));
  // TODO: persist the callback payload (e.g. to a database) keyed by
  // CheckoutRequestID, so status can be looked up by the frontend.
  return res.status(200).json({ ResultCode: 0, ResultDesc: "Accepted" });
}

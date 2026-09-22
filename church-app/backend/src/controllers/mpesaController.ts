import { Request, Response } from "express";
import { z } from "zod";
import { initiateStkPush } from "../services/mpesaService";

const stkPushSchema = z.object({
  phoneNumber: z
    .string()
    .min(9, "Enter a valid M-Pesa phone number")
    .regex(
      /^(?:\+?254|0)?[71]\d{8}$/,
      "Enter a valid Safaricom number, e.g. 0712345678"
    ),

  amount: z
    .number()
    .positive("Amount must be greater than 0"),

  accountReference: z
    .string()
    .max(40)
    .optional(),

  description: z
    .string()
    .max(60)
    .optional(),
});

export async function createStkPush(req: Request, res: Response) {
  const parsed = stkPushSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid request",
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  const {
    phoneNumber,
    amount,
    accountReference,
    description,
  } = parsed.data;

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
  } catch (error: any) {
    console.error(
      "STK push failed:",
      error.response?.data || error.message || error
    );

    return res.status(502).json({
      message: "M-Pesa STK Push failed",
      error: error.response?.data || error.message,
    });
  }
}

/**
 * Safaricom calls this URL after the customer
 * completes or cancels the STK Push.
 */
export function mpesaCallback(req: Request, res: Response) {
  console.log(
    "M-Pesa callback received:",
    JSON.stringify(req.body, null, 2)
  );

  return res.status(200).json({
    ResultCode: 0,
    ResultDesc: "Accepted",
  });
}


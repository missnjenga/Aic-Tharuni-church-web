import { NextFunction, Request, Response } from "express";

export function notFound(req: Request, res: Response) {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  // eslint-disable-next-line no-console
  console.error(err);
  res.status(500).json({ message: "Something went wrong on our end." });
}

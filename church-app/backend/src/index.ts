import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env";
import mpesaRoutes from "./routes/mpesa";
import contentRoutes from "./routes/content";
import { notFound, errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(helmet());
app.use(cors({ origin: env.clientOrigin, credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.use("/api/mpesa", mpesaRoutes);
app.use("/api", contentRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Church backend listening on http://localhost:${env.port}`);
});

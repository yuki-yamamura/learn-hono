import { cors } from "hono/cors";
import { OpenAPIHono } from "@hono/zod-openapi";
import { companiesRoute } from "./routes/companies";

const app = new OpenAPIHono();

app.use(
  "*",
  cors({
    origin: "http://localhost:3000",
  })
);

app.route("/companies", companiesRoute);

export default app;

import { Hono } from "hono";
import { companies } from "./routes/companies";
import { employees } from "./routes/employees";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:3000",
  })
);

app.route("/companies", companies);
app.route("/employees", employees);

export default app;

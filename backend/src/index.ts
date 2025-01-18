import { Hono } from "hono";
import { companies } from "./routes/companies";
import { employees } from "./routes/employees";

const app = new Hono();

app.route("/companies", companies);
app.route("/employees", employees);

export default app;

import { cors } from "hono/cors";
import { OpenAPIHono } from "@hono/zod-openapi";
import { companiesRoute } from "@/api/companies";
import { swaggerUI } from "@hono/swagger-ui";

const app = new OpenAPIHono();

app.use(
  "*",
  cors({
    origin: "http://localhost:3000",
  })
);

app.route("/companies", companiesRoute);

app.get("/ui", swaggerUI({ url: "/doc" }));
app.doc("/doc", {
  info: {
    title: "An API",
    version: "v1",
  },
  openapi: "3.1.0",
});

export default app;

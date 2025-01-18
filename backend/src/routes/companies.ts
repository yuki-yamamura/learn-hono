import { Hono } from "hono";
import { RequestData, ResponseData } from "@/types";

export const companies = new Hono();

companies
  .get("/", (context) => {
    return context.json<ResponseData>({
      message: "Companies Route",
    });
  })
  .post("/", async (context) => {
    const data: RequestData = await context.req.json();
    return context.json({
      message: `Company ID: ${data.id} created!`,
    });
  });

import { Hono } from "hono";
import { ResponseData } from "@/types/response-data";

export const companies = new Hono();

companies.get("/", (context) => {
  return context.json<ResponseData>({
    message: "Companies Route",
  });
});

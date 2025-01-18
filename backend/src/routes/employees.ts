import { Hono } from "hono";
import { ResponseData } from "@/types";

export const employees = new Hono();

employees.get("/", (context) => {
  return context.json<ResponseData>({
    message: "Employees Route",
  });
});

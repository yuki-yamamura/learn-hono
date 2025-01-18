import { createRoute } from "@hono/zod-openapi";
import { GetCompaniesSchema } from "@/validators/companies";
import { Handler } from "hono";

export const getCompaniesRoute = createRoute({
  path: "/",
  method: "get",
  responses: {
    200: {
      description: "Companies Route",
      content: {
        "application/json": {
          schema: GetCompaniesSchema,
        },
      },
    },
  },
});

export const handler: Handler = (context) => {
  return context.json([
    {
      id: "hoge",
      name: "Hoge Inc.",
    },
  ]);
};

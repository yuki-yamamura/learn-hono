import { GetCompaniesSchema, PostCompanySchema } from "@/validators/companies";
import { createRoute, OpenAPIHono } from "@hono/zod-openapi";

const companiesRoute = new OpenAPIHono();

/**
 * GET /companies
 */
companiesRoute.openapi(
  createRoute({
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
  }),
  (context) => {
    return context.json([
      {
        id: "hoge",
        name: "Hoge Inc.",
      },
    ]);
  }
);

/**
 * POST /companies
 */
companiesRoute.openapi(
  createRoute({
    path: "/",
    method: "post",
    requestBody: {
      content: {
        "application/json": {},
      },
    },
    responses: {
      200: {
        description: "Companies Route",
        content: {
          "application/json": {
            schema: PostCompanySchema,
          },
        },
      },
    },
  }),
  (context) => {
    return context.json({
      id: "hoge",
      name: "Hoge Inc.",
    });
  }
);

import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { ErrorResponseBodySchema } from "@/validators";
import {
  GetCompaniesResponseBodySchema,
  GetCompanyRequestParamsSchema,
  GetCompanyResponseBodySchema,
  PostCompanyRequestBodySchema,
  PostCompanyResponseBodySchema,
} from "@/validators/companies";
import { prismaClient } from "@/lib/prisma/client";

type Bindings = {
  MY_KV: KVNamespace;
  DB: D1Database;
};
const companiesRoute = new OpenAPIHono<{ Bindings: Bindings }>();

/**
 * GET /companies
 */
companiesRoute.openapi(
  createRoute({
    path: "/",
    method: "get",
    responses: {
      200: {
        description: "200 OK",
        content: {
          "application/json": {
            schema: GetCompaniesResponseBodySchema,
          },
        },
      },
    },
  }),
  async (context) => {
    const prisma = await prismaClient.fetch(context.env.DB);
    const companies = await prisma.company.findMany();
    return context.json(companies, 200);
  }
);

/**
 * Get /companies/:id
 */
companiesRoute.openapi(
  createRoute({
    path: "/:id",
    method: "get",
    request: {
      params: GetCompanyRequestParamsSchema,
    },
    responses: {
      200: {
        description: "200 OK",
        content: {
          "application/json": {
            schema: GetCompanyResponseBodySchema,
          },
        },
      },
    },
  }),
  async (context) => {
    const { id } = context.req.param();
    const prisma = await prismaClient.fetch(context.env.DB);
    const company = await prisma.company.findUnique({
      where: { id: Number(id) },
    });

    if (!company) {
      throw new Error("Company not found");
    }

    return context.json(company, 200);
  }
);

/**
 * POST /companies
 */
companiesRoute.openapi(
  createRoute({
    path: "/",
    method: "post",
    request: {
      body: {
        content: {
          "application/json": {
            schema: PostCompanyRequestBodySchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "201 Created",
        content: {
          "application/json": {
            schema: PostCompanyResponseBodySchema,
          },
        },
      },
      400: {
        description: "400 Bad Request",
        content: {
          "application/json": {
            schema: ErrorResponseBodySchema,
          },
        },
      },
    },
  }),
  async (context) => {
    const body = await context.req.json();
    const prisma = await prismaClient.fetch(context.env.DB);
    const company = await prisma.company.create({
      data: { name: body.name },
    });

    return context.json(company, 201);
  },
  (result, context) => {
    if (!result.success) {
      return context.json(
        {
          message: result.error.message,
        },
        400
      );
    }
  }
);

export { companiesRoute };

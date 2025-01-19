import { z } from "@hono/zod-openapi";

/**
 * Schemas
 */
const GetCompaniesResponseBodySchema = z
  .array(z.object({ id: z.number({ coerce: true }), name: z.string() }))
  .openapi({
    example: [
      {
        id: 12345,
        name: "Hoge Inc.",
      },
    ],
  });

const GetCompanyRequestParamsSchema = z
  .object({
    id: z.number({ coerce: true }),
  })
  .openapi({
    example: {
      id: 12345,
    },
  });

const GetCompanyResponseBodySchema = z
  .object({
    id: z.number({ coerce: true }),
    name: z.string(),
  })
  .openapi({
    example: {
      id: 12345,
      name: "Hoge Inc.",
    },
  });

const PostCompanyRequestBodySchema = z.object({ name: z.string() }).openapi({
  example: {
    name: "Hoge Inc.",
  },
});

const PostCompanyResponseBodySchema = z
  .object({
    id: z.number(),
    name: z.string(),
  })
  .openapi({
    example: {
      id: 12345,
      name: "Hoge Inc.",
    },
  });

/**
 * Types
 */
type GetCompaniesResponseBodyType = z.infer<
  typeof GetCompaniesResponseBodySchema
>;

type GetCompanyRequestParamsType = z.infer<
  typeof GetCompanyRequestParamsSchema
>;

type GetCompanyResponseBodyType = z.infer<typeof GetCompanyResponseBodySchema>;

type PostCompanyRequestBodyType = z.infer<typeof PostCompanyRequestBodySchema>;

type PostCompanyResponseBodyType = z.infer<
  typeof PostCompanyResponseBodySchema
>;

export {
  GetCompaniesResponseBodySchema,
  GetCompanyRequestParamsSchema,
  GetCompanyResponseBodySchema,
  PostCompanyRequestBodySchema,
  PostCompanyResponseBodySchema,
};

export type {
  GetCompaniesResponseBodyType,
  GetCompanyRequestParamsType,
  GetCompanyResponseBodyType,
  PostCompanyRequestBodyType,
  PostCompanyResponseBodyType,
};

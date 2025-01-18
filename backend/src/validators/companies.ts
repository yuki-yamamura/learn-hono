import { z } from "@hono/zod-openapi";

export const GetCompaniesSchema = z
  .array(z.object({ id: z.string(), name: z.string() }))
  .openapi({
    example: [
      {
        id: "hoge",
        name: "Hoge Inc.",
      },
    ],
  });

export const PostCompanySchema = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .openapi({
    example: {
      id: "hoge",
      name: "Hoge Inc.",
    },
  });

export type GetCompaniesSchemaType = z.infer<typeof GetCompaniesSchema>;

export type PostCompanySchemaType = z.infer<typeof PostCompanySchema>;

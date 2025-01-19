import { z } from "@hono/zod-openapi";

/**
 * Schemas
 */
const ErrorResponseBodySchema = z.object({
  message: z.string(),
});

/**
 * Types
 */
type ErrorResponseBodyType = z.infer<typeof ErrorResponseBodySchema>;

export { ErrorResponseBodySchema };

export type { ErrorResponseBodyType };

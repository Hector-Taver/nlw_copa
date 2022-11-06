import "@fastify/env";

declare module "fastify" {
  interface FastifyInstance {
    config: {
      JWT_TOKEN: string,
    }
  }
}

import Fastify from "fastify";
import fastifyEnv from "@fastify/env";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { authRoutes, gameRoutes, guessRoutes, poolRoutes, userRoutes } from "./routes";

export const schema = {
  type: "object",
  required: [ "JWT_TOKEN" ],
  properties: {
    JWT_TOKEN: {
      type: "string",
    }
  }
}

const options = {
  confKey: "config",
  schema,
  dotenv: true,
  data: process.env
}

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(fastifyEnv, options);

  await fastify.register(jwt, {
    secret: fastify.config.JWT_TOKEN,
  })


  await fastify.register(authRoutes);
  await fastify.register(gameRoutes);
  await fastify.register(guessRoutes);
  await fastify.register(poolRoutes);
  await fastify.register(userRoutes);

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();

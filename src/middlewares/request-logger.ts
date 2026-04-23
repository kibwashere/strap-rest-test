import type { Core } from '@strapi/strapi';

export default (_config: unknown, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx: any, next: () => Promise<any>) => {
    const start = Date.now();

    console.log(`[console.log] --> ${ctx.method} ${ctx.url}`);
    strapi.log.info(`[strapi.log] --> ${ctx.method} ${ctx.url}`);

    try {
      await next();
    } finally {
      const ms = Date.now() - start;
      console.log(
        `[console.log] <-- ${ctx.method} ${ctx.url} ${ctx.status} ${ms}ms`
      );
      strapi.log.info(
        `[strapi.log] <-- ${ctx.method} ${ctx.url} ${ctx.status} ${ms}ms`
      );
    }
  };
};

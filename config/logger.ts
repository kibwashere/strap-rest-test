import { winston } from '@strapi/logger';

/**
 * Custom logger configuration.
 *
 * The transport(s) defined here are considered "user transports" and should
 * be preserved by Strapi Cloud even when STRAPI_CLOUD_JSON_LOGS=true is set
 * (which adds an additional JSON Console transport on top of these).
 *
 * To verify the behavior:
 *   1. Set STRAPI_CLOUD_JSON_LOGS=true in the Cloud environment.
 *   2. Trigger a deployment.
 *   3. Hit any endpoint and confirm that lines prefixed with [CUSTOM ...]
 *      still appear alongside the Cloud JSON log output.
 */
export default {
  transports: [
    new winston.transports.Console({
      level: 'http',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) =>
          `[CUSTOM ${timestamp}] ${level}: ${message}`
        )
      ),
    }),
  ],
};

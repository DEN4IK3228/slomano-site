import path from 'path';

export default ({ env }) => {
  const client = 'postgres'; // фиксируем, чтобы Strapi не переключался на sqlite/mysql

  return {
    connection: {
      client,
      connection: {
        connectionString: env('DATABASE_URL'),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      pool: { min: 1, max: 10 },
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};

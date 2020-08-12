module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env('DATABASE_HOST', 'localhost'),
        port: env('DATABASE_PORT', 5432),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', ''),
        database: env('DATABASE_NAME', "strapi"),
        ssl: env.bool('DATABASE_SSL', true),
        schema: "public",
      },
      options: {
        debug: false,
        pool: {
          min: 0,
          max: 50,
          idleTimeoutMillis: 120000,
          createTimeoutMillis: 120000,
          acquireTimeoutMillis: 120000
        }
      },
    },
  },
});

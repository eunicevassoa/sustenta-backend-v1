module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env('DB_HOST', 'localhost'),
        port: env('DB_PORT', 5432),
        username: env('DB_USERNAME', 'root'),
        password: env('DB_PASSWORD', ''),
        database: env('DB_NAME', "strapi"),
        schema: "public",
      },
      options: {
        debug: false,
      },
    },
  },
});

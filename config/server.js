module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', env('PORT', 1337)),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1ccf556c6f24bceb76d2f95fad61fd92'),
    },
  },
});

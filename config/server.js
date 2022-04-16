module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://api.gotifly.com',
  app: {
    keys: env.array('APP_KEYS'),
  },
});

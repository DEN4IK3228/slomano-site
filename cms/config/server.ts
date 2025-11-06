export default ({ env }) => ({
  url: env('PUBLIC_URL'), // например, https://slomano-cms.onrender.com
  proxy: true,
  app: { keys: env.array('APP_KEYS') },
  cors: {
    enabled: true,
    origin: [
      'http://localhost:1337',
      'http://localhost:5173',
      'https://slomano-cms.onrender.com',     // твой Strapi
      'https://slomano-site.netlify.app',      // твой фронт на Netlify
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    headers: '*',
    credentials: true,
  },
});

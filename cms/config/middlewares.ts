export default [
  // тело увеличиваем после (см. п.3), сначала – security
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'"],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            // Cloudinary
            'res.cloudinary.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
          ],
          'connect-src': [
            "'self'",
            'https:',
            'blob:',
            'data:',
          ],
          'script-src': [
            "'self'",
            'https:',
            'blob:',
            "'unsafe-inline'",
          ],
          'style-src': ["'self'", 'https:', "'unsafe-inline'"],
          'frame-src': ["'self'", 'https:'],
        },
      },
    },
  },
  'strapi::cors',
  // смотри п.3 — сюда добавим body-parser с лимитами
  // 'strapi::body', { ... }
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
  name: 'strapi::body',
  config: {
    jsonLimit: '64mb',
    formLimit: '64mb',
    textLimit: '64mb',
  },
},

];

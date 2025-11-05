module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: { origin: ['http://localhost:5173', 'https://ТВОЙ_ФРОНТ_ДОМЕН'] },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

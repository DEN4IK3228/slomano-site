export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloudinary: {
          // если используешь CLOUDINARY_URL одной строкой
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
      },
      sizeLimit: 50 * 1024 * 1024,
    },
  },
});

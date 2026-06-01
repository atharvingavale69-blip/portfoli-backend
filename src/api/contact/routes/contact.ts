import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::contact.contact', {
  config: {
    find: {
      auth: false, // Public GET /contacts bypass
    },
    findOne: {
      auth: false,
    },
    create: {
      auth: false, // Public POST /contacts bypass (Contact form submit karne ke liye)
    },
  },
});
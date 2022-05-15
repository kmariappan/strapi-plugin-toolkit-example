'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('awesome-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
};

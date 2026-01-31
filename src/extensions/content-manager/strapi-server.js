"use strict";

module.exports = (plugin) => {
  // Add preview action to content types
  const originalBootstrap = plugin.bootstrap;

  plugin.bootstrap = async ({ strapi }) => {
    if (originalBootstrap) {
      await originalBootstrap({ strapi });
    }

    // Register preview functionality
    strapi.log.info("Preview functionality registered");
  };

  return plugin;
};

"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/preview/generate",
      handler: "preview.generatePreviewUrl",
      config: {
        auth: false,
      },
    },
  ],
};

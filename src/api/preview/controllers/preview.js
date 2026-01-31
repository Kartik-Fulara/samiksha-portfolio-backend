"use strict";

const crypto = require("crypto");

module.exports = {
  async generatePreviewUrl(ctx) {
    try {
      const { contentType, id } = ctx.query;

      if (!contentType || !id) {
        return ctx.badRequest("Missing contentType or id");
      }

      // Generate a secure preview token
      const token = crypto.randomBytes(32).toString("hex");

      // Get frontend URL from env
      const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";

      // Build preview URL
      const previewUrl = `${frontendUrl}/api/preview?token=${token}&type=${contentType}&id=${id}`;

      ctx.send({
        url: previewUrl,
        token,
        message: "Preview URL generated successfully",
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};

/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  // your configuration values.
  convertFormat: [
    ["png", "webp"],
    ["jpg", "webp"],
    ["jpeg", "webp"],
  ],
};

module.exports = config;

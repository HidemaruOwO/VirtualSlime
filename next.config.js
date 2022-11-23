const withExportImages = require("next-export-optimize-images");

module.exports = withExportImages({
  // write your next.js configuration values.
  // next.config.js
  i18n: {
    defaultLocale: "ja",
  },
  domains: [
    {
      domain: "v-sli.me",
      defaultLocale: "ja",
    },
    {
      domain: "example.en",
      defaultLocale: "en",
    },
  ],
});

const tailwindcss = require("tailwindcss");
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.svelte', './src/**/*.html'],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [tailwindcss("./tailwind.config.js")],
  ...(!process.env.ROLLUP_WATCH ? [purgecss] : [])
};
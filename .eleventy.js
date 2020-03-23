const moment = require("moment");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

moment.locale("pt-br");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("dateIso", date => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter("dateReadable", date => {
    return moment(date).format("LL"); // E.g. May 31, 2019
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  // Folders to copy to output folder
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
};

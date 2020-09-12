module.exports = function (eleventy) {
  
    // Add related posts
    eleventy.addLiquidShortcode("related", function (title, url) {
      return `<a href="${url}" class="related">${title}</a>`
    }
    );
  
  };
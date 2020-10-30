const path = require("path");
const pxtoviewport = require("postcss-px-to-viewport");
module.exports = {
  lintOnSave: false, //为false时可以干掉eslint语法检查
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtoviewport({
            viewportWidth: 375, //设计稿宽度
          }),
        ],
      },
    },
  },
};

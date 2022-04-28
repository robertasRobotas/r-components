const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        Inject: true, // change here to true
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};

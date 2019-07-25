module.exports = function wina(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

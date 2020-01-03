module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env', 
      {
        useBuiltIns: 'usage',
        corejs: 2,
        targets: {
          ie: 9,
          // edge: 70,
          chrome: 67
        }
      }
    ]
  ];
  const plugins = ['@babel/plugin-transform-runtime'];

  return {
    presets,
    plugins
  };
}
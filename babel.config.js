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
  const plugins = [
    '@babel/plugin-transform-runtime',
    [
      "babel-plugin-component", 
      {
        "libraryName": "mint-ui", // 针对mint-ui来实现按需引入打包
        "style": true  // 自动打包组件对应的样式
      }
    ]
  ];

  return {
    presets,
    plugins
  };
}
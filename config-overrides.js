const {addLessLoader, fixBabelImports, override} = require( 'customize-cra')

module.exports = {
  webpack: override(
    /* antd组件按需加载 */
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#f9c700'},
      }
    }),
  )
};
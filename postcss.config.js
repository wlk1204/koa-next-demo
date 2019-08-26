module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ["last 2 versions"]
    },
    'postcss-px-to-viewport': {
      viewportWidth: 1920,
      viewportHeight: 1080,
      unitPrecision: 5,
      viewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false
    },
    'cssnano': {
      reduceIdents: false,
      zindex: false,
      discardUnused: {
        fontFace: false
      }
    }
  }
}
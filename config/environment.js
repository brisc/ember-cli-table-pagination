'use strict'

module.exports = function (/* environment, appConfig */) {
  return {
    resizeServiceDefaults: {
      debounceTimeout: 100,
      heightSensitive: true,
      widthSensitive: true,
      injectionFactories: ['component']
    }
  }
}

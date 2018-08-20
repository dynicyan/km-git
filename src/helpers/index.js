import Clickoutside from './clickoutSide'

exports.install = function(Vue, options) {
  Vue.mixin({
    directives: {
      Clickoutside
    }
  })
}

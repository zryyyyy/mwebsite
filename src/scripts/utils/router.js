function Router() {
  this.currentUrl = ''
  this.routes = {}
}

var noop = function() {}

Router.prototype.route = function (url, cb) {
  this.routes[url] = cb || noop
}

Router.prototype.refresh = function() {
  this.currentUrl = location.hash.slice(1) || '/index'
  this.routes[this.currentUrl]()
}

Router.prototype.init = function() {
  window.addEventListener('load', this.refresh.bind(this))
  window.addEventListener('hashchange', this.refresh.bind(this))
}

module.exports = Router

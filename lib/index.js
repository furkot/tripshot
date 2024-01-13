var style = require('widget-styling');

module.exports = tripshot;

var baseUrl = 'https://trips.furkot.com/widget/ts';
var baseClass = 'furkot-tripshot-widget';
var selectors = ['button', 'buttonHover', 'buttonFocus', 'link', 'linkHover', 'linkActive', 'linkVisited', 'heading'];

function tripshot() {
  document.querySelectorAll('iframe').forEach(function (node) {
    var src = node.getAttribute('src'), cl = node.getAttribute('class');
    if ((src && src.indexOf(baseUrl) === 0) || (cl && cl.indexOf(baseClass) > -1)) {
      style(selectors, node);
      window.addEventListener('message', function (ev) {
        if (!(ev.data && ev.data.furkot && ev.data.ready)) {
          return;
        }
        style(selectors, node);
      });
    }
  });
}

tripshot();

var init = require('domready');
var events = require('event');
var style = require('widget-styling');

module.exports = tripshot;

var baseUrl = 'https://trips.furkot.com/widget/ts';
var baseClass = 'furkot-tripshot-widget';
var selectors = [ 'button', 'link', 'heading' ];

function tripshot() {
  Array.prototype.forEach.call(document.querySelectorAll('iframe'), function (node) {
    var src = node.getAttribute('src'), cl = node.getAttribute('class');
    if (src.indexOf(baseUrl) === 0 || cl.indexOf(baseClass) > -1) {
      style(selectors, node);
      events.bind(window, 'message', function (ev) {
        if (!(ev.data && ev.data.furkot && ev.data.ready)) {
          return;
        }
        style(selectors, node);
      });
    }
  });
}

init(function () {
  tripshot();
});

const style = require('widget-styling');

module.exports = tripshot;

const baseUrl = 'https://trips.furkot.com/widget/ts';
const baseClass = 'furkot-tripshot-widget';
const selectors = ['button', 'buttonHover', 'buttonFocus', 'link', 'linkHover', 'linkActive', 'linkVisited', 'heading'];

function tripshot() {
  document.querySelectorAll('iframe').forEach(node => {
    const src = node.getAttribute('src');
    const cl = node.getAttribute('class');
    if (src?.startwWith(baseUrl) || cl?.includes(baseClass)) {
      style(selectors, node);
      window.addEventListener('message', ev => {
        if (ev.data?.furkot && ev.data?.ready) {
          style(selectors, node);
        }
      });
    }
  });
}

tripshot();

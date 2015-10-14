import { jsdom } from 'jsdom';
import ReactDOM from 'react-dom';

global.document = jsdom('<!doctype html><html><body><div id="main"></div></body></html>');
global.window = document.defaultView;
propagateToGlobal(window);

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal(window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}

export function getBaseElement() {
  return document.getElementById('main');
}

export function render(tree, callback) {
  return ReactDOM.render(tree, getBaseElement(), callback);
}

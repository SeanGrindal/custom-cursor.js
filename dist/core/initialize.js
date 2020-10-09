'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = initialize;

var _isMobileUserAgent = require('../util/isMobileUserAgent');

var _focus = require('./focus');

var _focus2 = _interopRequireDefault(_focus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize(cursor) {
  if (!(0, _isMobileUserAgent.isMobileUserAgent)()) {
    cursor.element.classList.add('cursor--initialized');

    if (cursor.options.hideTrueCursor) {
      cursor.styleTag = document.createElement('style');
      cursor.styleTag.innerHTML = '\n        * {\n          cursor: none;\n        }\n      ';

      document.head.appendChild(cursor.styleTag);
    }

    document.addEventListener('mousemove', cursor.track);

    document.addEventListener('mouseleave', cursor.leave);

    document.addEventListener('mouseenter', cursor.enter);

    var render = function render() {
      if (!cursor.disabled) {
        var top = cursor.position.Y;
        var left = cursor.position.X;

        cursor.element.style.transform = 'matrix(1, 0, 0, 1, ' + left + ', ' + top + ')';
      }

      requestAnimationFrame(render);
    };

    render();

    cursor.focusObj = new _focus2.default(cursor).initialize();
    cursor.initialized = true;
  }
}
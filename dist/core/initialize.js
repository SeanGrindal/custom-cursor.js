'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initialize = initialize;

var _focus = require('./focus');

var _focus2 = _interopRequireDefault(_focus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize(cursor) {
    if (!cursor.isMobileUserAgent) {
        cursor.element.classList.add('cursor--initialized');

        if (cursor.options.hideTrueCursor) {
            cursor.hideTrueCursor();
        }

        document.addEventListener('mousemove', cursor.track);

        document.addEventListener('mouseleave', cursor.leave);

        document.addEventListener('mouseenter', cursor.enter);

        document.addEventListener('mousedown', cursor.clicking);

        var render = function render() {
            if (!cursor.disabled) {
                cursor.setPosition(cursor.position.X, cursor.position.Y);
            }

            requestAnimationFrame(render);
        };

        render();

        cursor.focusController = new _focus2.default(cursor).addFocusElements(cursor.options.focusElements);
        cursor.initialized = true;
    }
}
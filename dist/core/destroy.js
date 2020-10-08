'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.destroy = destroy;
function destroy(cursor) {
    if (cursor.initialized) {
        cursor.element.classList.remove('cursor--initialized');
        cursor.element.classList.remove('cursor--disabled');
        cursor.element.classList.remove('cursor--off-screen');

        if (cursor.styleTag) document.head.removeChild(cursor.styleTag);

        document.removeEventListener('mousemove', cursor.track);

        document.removeEventListener('mouseleave', cursor.leave);

        document.removeEventListener('mouseenter', cursor.enter);

        cursor.focusObj = cursor.focusObj.destroy();
        cursor.initialized = false;
    }
}
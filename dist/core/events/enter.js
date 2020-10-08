'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enter = enter;
function enter(cursor) {
  cursor.element.classList.remove('cursor--off-screen');
}
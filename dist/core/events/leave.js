'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leave = leave;
function leave(cursor) {
  cursor.element.classList.add('cursor--off-screen');
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.track = track;
function track(e, cursor) {
  cursor.position.X = e.clientX;
  cursor.position.Y = e.clientY;
}
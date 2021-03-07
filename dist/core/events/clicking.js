'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.clicking = clicking;
function clicking(cursor) {
   cursor.element.classList.add('cursor--clicking');

   var mouseup = function mouseup() {
      cursor.element.classList.remove('cursor--clicking');

      document.removeEventListener('mouseup', mouseup);
   };

   document.addEventListener('mouseup', mouseup, { once: true });
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arraysMatch = arraysMatch;
function arraysMatch(arr1, arr2) {
  if (arr1.length == arr2.length) {
    if (arr1.sort().join(',') === arr2.sort().join(',')) {
      return true;
    }
  }

  return false;
}
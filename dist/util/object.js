'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areOptionsEqual = areOptionsEqual;

var _array = require('./array.js');

function areOptionsEqual(object1, object2) {
  for (var key in object1) {
    if (object1.hasOwnProperty(key)) {
      if (Array.isArray(object1[key])) {
        if (!(0, _array.arraysMatch)(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) return false;
    }
  }

  return true;
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Focus = function () {
  function Focus(cursor) {
    var _this = this;

    _classCallCheck(this, Focus);

    this.cursor = cursor;

    this.initializedElements = [];

    this.elementEnter = function () {
      _this.cursor.element.classList.add(_this.cursor.options.focusClass);
    };

    this.elementLeave = function () {
      _this.cursor.element.classList.remove(_this.cursor.options.focusClass);
    };
  }

  _createClass(Focus, [{
    key: 'initialize',
    value: function initialize() {
      var _this2 = this;

      this.cursor.options.focusElements.forEach(function (element) {
        if (typeof element === 'string') element = document.querySelector(element);
        if (!element || !element.nodeName) return;

        element.addEventListener('mouseenter', _this2.elementEnter);
        element.addEventListener('mouseleave', _this2.elementLeave);

        _this2.initializedElements.push(element);
      });

      return this;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      this.initializedElements.forEach(function (initializedElement) {
        initializedElement.removeEventListener('mouseenter', _this3.elementEnter);
        initializedElement.removeEventListener('mouseleave', _this3.elementLeave);
      });

      this.cursor.element.classList.remove(this.cursor.options.focusClass);

      return null;
    }
  }]);

  return Focus;
}();

exports.default = Focus;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Focus = function () {
  function Focus(cursor) {
    var _this = this;

    _classCallCheck(this, Focus);

    this.cursor = cursor;

    this.initializedElements = [];
    this.focusClasses = [];

    this.elementEnter = function (focusClass, customEnterFunc) {
      var func = function func() {
        if (focusClass) {
          _this.cursor.element.classList.add(focusClass);
        }

        if (typeof customEnterFunc == 'function') customEnterFunc();
      };

      return func;
    };

    this.elementLeave = function (focusClass, customLeaveFunc) {
      var func = function func() {
        if (focusClass) {
          _this.cursor.element.classList.remove(focusClass);
        }

        if (typeof customLeaveFunc == 'function') customLeaveFunc();
      };

      return func;
    };
  }

  _createClass(Focus, [{
    key: 'addFocusElements',
    value: function addFocusElements(focusOpts) {
      var _this2 = this;

      focusOpts.forEach(function (selector) {
        if (typeof selector == 'string' || (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') {
          var elInfo = selector.hasOwnProperty('elements') ? selector.elements : selector;
          var focusClass = selector.hasOwnProperty('focusClass') ? selector.focusClass : _this2.cursor.options.focusClass;
          var customEnterFunc = selector.hasOwnProperty('mouseenter') ? selector.mouseenter : null;
          var customLeaveFunc = selector.hasOwnProperty('mouseleave') ? selector.mouseleave : null;

          var elements = [];

          if (typeof elInfo == 'string') {
            elements = document.querySelectorAll(elInfo);
          } else {
            elements = elInfo;
          }

          var enterFunc = _this2.elementEnter(focusClass, customEnterFunc);
          var leaveFunc = _this2.elementLeave(focusClass, customLeaveFunc);

          if (!_this2.focusClasses.includes(focusClass)) {
            _this2.focusClasses.push(focusClass);
          }

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var el = _step.value;

              if (_this2.initializedElements.map(function (item) {
                return item.el;
              }).includes(el)) continue;

              el.addEventListener('mouseenter', enterFunc);
              el.addEventListener('mouseleave', leaveFunc);

              _this2.initializedElements.push({ el: el, enterFunc: enterFunc, leaveFunc: leaveFunc });
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      });

      return this;
    }
  }, {
    key: 'removeFocusElements',
    value: function removeFocusElements(elements) {
      var _this3 = this;

      elements.forEach(function (el) {
        var ref = _this3.initializedElements.find(function (item) {
          return item.el == el;
        });

        if (ref) {
          el.removeEventListener('mouseenter', ref.enterFunc);
          el.removeEventListener('mouseleave', ref.leaveFunc);
        }
      });

      if (elements.length) {
        this.initializedElements = this.initializedElements.filter(function (obj) {
          return ![].concat(_toConsumableArray(elements)).includes(obj.el);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.initializedElements.forEach(function (initializedElement) {
        initializedElement.el.removeEventListener('mouseenter', initializedElement.enterFunc);
        initializedElement.el.removeEventListener('mouseleave', initializedElement.leaveFunc);
      });

      this.initializedElements = [];

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.focusClasses[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var string = _step2.value;

          this.cursor.element.classList.remove(string);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    }
  }]);

  return Focus;
}();

exports.default = Focus;
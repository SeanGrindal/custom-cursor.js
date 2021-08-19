'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // DEFAULT SETTINGS


// UTILITY FUNCTIONS


// CORE FUNCTIONS


// EVENTS


var _defaults = require('./defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _log = require('./util/log');

var _object = require('./util/object');

var _isMobileUserAgent = require('./util/isMobileUserAgent');

var _destroy2 = require('./core/destroy');

var _initialize2 = require('./core/initialize');

var _enter = require('./core/events/enter');

var _leave = require('./core/events/leave');

var _track = require('./core/events/track');

var _clicking = require('./core/events/clicking');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomCursor = function () {
  function CustomCursor(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CustomCursor);

    if (typeof element === 'string') {
      element = document.querySelector(element);
    }

    if (!element || !element.nodeName) {
      throw new Error('No element is specified to initialize customCursor');
    }

    this.element = element;

    this.focusController = null;

    this.styleTag = null;

    this.initialized = false;

    this.disabled = false;

    this.position = {
      X: null,
      Y: null
    };

    this.options = {
      hideTrueCursor: options.hideTrueCursor || _defaults2.default.hideTrueCursor,

      focusElements: options.focusElements || _defaults2.default.focusElements,

      focusClass: options.focusClass || _defaults2.default.focusClass
    };

    this.isMobileUserAgent = (0, _isMobileUserAgent.isMobileUserAgent)();

    this.enter = function () {
      (0, _enter.enter)(_this);
    };

    this.leave = function () {
      (0, _leave.leave)(_this);
    };

    this.track = function (e) {
      (0, _track.track)(e, _this);
    };

    this.clicking = function (e) {
      (0, _clicking.clicking)(_this);
    };
  }

  _createClass(CustomCursor, [{
    key: 'initialize',
    value: function initialize() {
      (0, _initialize2.initialize)(this);

      return this;
    }
  }, {
    key: 'disable',
    value: function disable() {
      if (this.initialized) {
        this.disabled = true;

        this.element.classList.add('cursor--disabled');
      } else (0, _log.warn)('CustomCursor needs to be initialized before it can be disabled');

      return this;
    }
  }, {
    key: 'enable',
    value: function enable() {
      if (this.initialized) {
        this.disabled = false;

        this.element.classList.remove('cursor--disabled');
      } else (0, _log.warn)('CustomCursor needs to be initialized before it can be enabled');

      return this;
    }
  }, {
    key: 'update',
    value: function update(newOptions) {
      if (!newOptions) {
        (0, _log.warn)('No new options are specified in update call');

        return;
      }

      if (!(0, _object.areOptionsEqual)(newOptions, this.options)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.entries(newOptions)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            this.options[key] = value;
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
      } else (0, _log.warn)('New options in update call are the same as the old options');

      this.destroy().initialize();

      return this;
    }
  }, {
    key: 'hideTrueCursor',
    value: function hideTrueCursor() {
      if (!this.styleTag) {
        this.styleTag = document.createElement('style');
        this.styleTag.innerHTML = '\n        * {\n          cursor: none;\n        }\n      ';

        document.head.appendChild(this.styleTag);
      }

      return this;
    }
  }, {
    key: 'unhideTrueCursor',
    value: function unhideTrueCursor() {
      if (this.styleTag) {
        document.head.removeChild(this.styleTag);
        this.styleTag = null;
      }

      return this;
    }
  }, {
    key: 'setPosition',
    value: function setPosition(x, y) {
      var _this2 = this;

      var reqAni = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var set = function set() {
        if (typeof x == 'number' && typeof y == 'number') {
          _this2.element.style.transform = 'matrix(1, 0, 0, 1, ' + x + ', ' + y + ')';
        }
      };

      if (reqAni) requestAnimationFrame(set);else set();

      return this;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      (0, _destroy2.destroy)(this);

      return this;
    }
  }]);

  return CustomCursor;
}();

exports.default = CustomCursor;
"use strict";

var _react = _interopRequireDefault(require("react"));

var _ink = require("ink");

var _inkTextInput = _interopRequireDefault(require("ink-text-input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InputField = function InputField(_ref) {
  var name = _ref.name,
      details = _ref.details,
      currentValue = _ref.currentValue,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit;
  return _react.default.createElement(_ink.Box, null, _react.default.createElement(_ink.Box, {
    marginRight: 1
  }, "What is your ", details, "?: "), _react.default.createElement(_inkTextInput.default, {
    value: currentValue,
    showCursor: true,
    onChange: handleChange,
    onSubmit: function onSubmit(value) {
      return handleSubmit(name, value);
    }
  }));
};

var SearchQuery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchQuery, _React$Component);

  function SearchQuery() {
    var _this;

    _classCallCheck(this, SearchQuery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchQuery).call(this));
    _this.state = {
      currentValue: "",
      firstName: "",
      lastName: ""
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SearchQuery, [{
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        currentValue: value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(key, value) {
      var _this$setState;

      this.setState((_this$setState = {}, _defineProperty(_this$setState, key, value), _defineProperty(_this$setState, "currentValue", ""), _this$setState));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          currentValue = _this$state.currentValue;
      var options = {
        currentValue: currentValue,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      };

      if (!firstName) {
        return _react.default.createElement(InputField, _extends({
          name: "firstName",
          details: "First Name"
        }, options));
      }

      if (!lastName) {
        return _react.default.createElement(InputField, _extends({
          name: "lastName",
          details: "Last Name"
        }, options));
      }

      return _react.default.createElement(_ink.Box, {
        marginRight: 1
      }, "Your full name is ", firstName, " ", lastName);
    }
  }]);

  return SearchQuery;
}(_react.default.Component);

(0, _ink.render)(_react.default.createElement(SearchQuery, null));
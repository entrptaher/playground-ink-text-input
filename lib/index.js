"use strict";

var _react = _interopRequireWildcard(require("react"));

var _ink = require("ink");

var _inkTextInput = _interopRequireDefault(require("ink-text-input"));

var _dummy = _interopRequireDefault(require("../scraper/dummy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
/**
 * if no url provided ask for target website
 * navigate the website
 * ask for selector
 * get status for selector
 * if no selector provided, then cleanup and exit
 */


var ExampleResponder =
/*#__PURE__*/
function (_Component) {
  _inherits(ExampleResponder, _Component);

  function ExampleResponder() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ExampleResponder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ExampleResponder)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentValue: "",
      url: {
        value: "",
        submitted: false
      },
      selector: "",
      statusText: ""
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      _this.setState({
        currentValue: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setUrl", function (value) {
      var url = _this.state.url;
      url.submitted = false;
      url.value = value;

      _this.setState({
        url: url
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setUrlStatus", function () {
      var url = _this.state.url;
      url.submitted = true;

      _this.setState({
        url: url
      });
    });

    return _this;
  }

  _createClass(ExampleResponder, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currentValue = _this$state.currentValue,
          url = _this$state.url;

      if (!url || !url.submitted) {
        return _react.default.createElement(_ink.Box, null, _react.default.createElement(_ink.Box, {
          marginRight: 1
        }, "Enter target URL: "), _react.default.createElement(_inkTextInput.default, {
          value: url.value,
          showCursor: true,
          onChange: this.setUrl,
          onSubmit: this.setUrlStatus
        }));
      }

      return _react.default.createElement(_ink.Box, {
        flexDirection: "column"
      }, _react.default.createElement(_ink.Text, {
        flex: 1
      }, "Current URL: ", url.value), _react.default.createElement(_ink.Box, {
        flex: 1
      }, _react.default.createElement(_ink.Box, {
        marginRight: 1,
        flex: 1
      }, "Current URL: ", url.value), _react.default.createElement(_ink.Box, {
        marginRight: 1
      }, "Selector: "), _react.default.createElement(_inkTextInput.default, {
        value: currentValue,
        showCursor: true,
        onChange: this.handleChange
      })));
    }
  }]);

  return ExampleResponder;
}(_react.Component);

var SearchQuery =
/*#__PURE__*/
function (_Component2) {
  _inherits(SearchQuery, _Component2);

  function SearchQuery() {
    var _this2;

    _classCallCheck(this, SearchQuery);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SearchQuery).call(this));
    _this2.state = {
      currentValue: "",
      firstName: "",
      lastName: ""
    };
    _this2.handleChange = _this2.handleChange.bind(_assertThisInitialized(_this2));
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
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
      var _this$state2 = this.state,
          firstName = _this$state2.firstName,
          lastName = _this$state2.lastName,
          currentValue = _this$state2.currentValue;
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
}(_react.Component);

(0, _ink.render)(_react.default.createElement(ExampleResponder, null));
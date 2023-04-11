function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var styles = {"test":"_styles-module__test__3ybTi","primary":"_styles-module__primary__3ljpl","secondary":"_styles-module__secondary__2Lfm6","dashed":"_styles-module__dashed__27xYC","link":"_styles-module__link__71S8l","download":"_styles-module__download__2j7qE","loading":"_styles-module__loading__MATvY","spin":"_styles-module__spin__1sp4O"};

var Button = function Button(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React.createElement("button", _extends({
    className: props.type ? styles[props.type] : styles.primary
  }, props), props.text));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map

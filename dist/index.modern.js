import React from 'react';

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

var styles = {"test":"_3ybTi","primary":"_3ljpl","secondary":"_2Lfm6","dashed":"_27xYC","link":"_71S8l","download":"_2j7qE","loading":"_MATvY","spin":"_1sp4O"};

var Button = function Button(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React.createElement("button", _extends({
    className: props.type ? styles[props.type] : styles.primary
  }, props), props.text));
};

export { Button };
//# sourceMappingURL=index.modern.js.map

import React from 'react';

var styles = {"test":"_styles-module__test__3ybTi","primary":"_styles-module__primary__3ljpl","secondary":"_styles-module__secondary__2Lfm6","dashed":"_styles-module__dashed__27xYC","link":"_styles-module__link__71S8l","download":"_styles-module__download__2j7qE","loading":"_styles-module__loading__MATvY","spin":"_styles-module__spin__1sp4O"};

const Button = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React.createElement("button", Object.assign({
    className: props.type ? styles[props.type] : styles.primary
  }, props), props.text));
};

export { Button };
//# sourceMappingURL=index.modern.js.map

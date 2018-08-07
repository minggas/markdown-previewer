import React from "react";
import PropTypes from "prop-types";

const MarkdownInput = props => {
  return (
    <textarea
      id={props.id}
      onChange={props.onChange}
      value={props.value}
      className={props.className}
    />
  );
};

MarkdownInput.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string
};

export default MarkdownInput;

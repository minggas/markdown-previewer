import React from "react";
import PropTypes from "prop-types";

const MarkdownInput = props => {
  return (
    <div className="wrap">
      <h3 className="toolbar-title">Editor</h3>
      <textarea
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        className={props.className}
      />
    </div>
  );
};

MarkdownInput.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string
};

export default MarkdownInput;

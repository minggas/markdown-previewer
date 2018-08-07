import React from "react";
import PropTypes from "prop-types";

const MarkdownPreview = props => {
  return (
    <div
      id={props.id}
      dangerouslySetInnerHTML={props.value}
      className={props.className}
    />
  );
};

MarkdownPreview.propTypes = {
  id: PropTypes.string,
  value: PropTypes.object,
  className: PropTypes.string
};

export default MarkdownPreview;

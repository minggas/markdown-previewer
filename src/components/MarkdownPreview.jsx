import React from "react";
import PropTypes from "prop-types";

const MarkdownPreview = props => {
  return (
    <div className="wrap pw-wrap">
      <h3 className="toolbar-title">Previewer</h3>
      <div
        id={props.id}
        dangerouslySetInnerHTML={props.value}
        className={props.className}
      />
    </div>
  );
};

MarkdownPreview.propTypes = {
  id: PropTypes.string,
  value: PropTypes.object,
  className: PropTypes.string
};

export default MarkdownPreview;

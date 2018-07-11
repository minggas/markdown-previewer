import React from 'react';

const Editor = (props) => {
    return (
        <textarea onChange={props.enterText}/>
    );
};

export default Editor;
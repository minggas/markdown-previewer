import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const param = {
    placeholder: '',
    className: 'previewer',
    inputClassName: 'editor' ,
    previewClassName: 'preview',
    inputId: 'editor',
    previewId: 'preview'
}

ReactDOM.render(<App {...param}/>, document.getElementById('root'));
registerServiceWorker();

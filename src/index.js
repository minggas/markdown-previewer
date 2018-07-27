import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const param = {
    placeholder: "",
    className: "previewer",
    inputClassName: "editor",
    previewClassName: "preview",
    inputId: "editor",
    previewId: "preview",
    defaultValue: `
# MARKDOWN PREVIEWER
## A FCC project
You can make your text **bold** or  put some *emphasis* on it.
  
\`<div>this is a line of code</div>\`
  
\`\`\`
if(blockcode){
  lineOfCode ++;
}    
\`\`\`

This is a list
* First item
* Second item
  
>  
> This is first level of blockquote
>
>>This is second level
>
> Back to the first level
>

![This is a kitten](https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=150)
  
Here you can find more about [marked](https://marked.js.org/ "link to marked page")`
};

ReactDOM.render(<App {...param}/>, document.getElementById('root'));
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GitRibbon from "./components/GitRibbon";
//import registerServiceWorker from './registerServiceWorker';

const param = {
  placeholder: "",
  className: "previewer",
  inputClassName: "editor",
  previewClassName: "preview",
  inputId: "editor",
  previewId: "preview",
  defaultValue: `
# MARKDOWN PREVIEWER
## A FCC project by Minggas
---
You can make your text **bold** or  put some *emphasis* on it.
  
\`<div>this is a line of code</div>\`
  
\`\`\`
if(blockcode){
  lineOfCode ++;
}    
\`\`\`

This is a list
1. First ordered list item
2. Another item
  * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.  
   
   Some text that should be aligned with the above item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses
  
>  
> This is first level of blockquote
>
>>This is second level
>
> Back to the first level
>

| Tables | Are | Cool |
| --- |:---:| ---:|
| col 3 is | right-aligned | $1600 |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |

![alt text](https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=150 "This is a kitty")
  
Here you can find more about [marked](https://marked.js.org/ "link to marked page")`
};

ReactDOM.render(<App {...param} />, document.getElementById("root"));
//registerServiceWorker();

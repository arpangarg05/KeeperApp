import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

var buttons = document.querySelectorAll('.colorButtons');
var body = document.querySelector('body');

buttons.forEach(item=>{
        item.addEventListener('click',(e)=>{
                body.style.backgroundColor = e.target.id;
        })
})

ReactDOM.render(<App />, document.getElementById("root"));

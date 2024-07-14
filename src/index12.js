import React from "react";
import ReactDOM  from "react-dom/client"

// var element = React.createElement('h1', null, "Hello React World");
var myStyle = {
    color:'green',
    borderBottom:'2px solid green'
}

var element = <h1>Hello React World</h1>;

var element = <div style={myStyle}>
                <h1>Hello React World</h1>
                <p>Welcome to world of react</p>
            </div>;

ReactDOM.createRoot(document.querySelector("#root")).render(element);

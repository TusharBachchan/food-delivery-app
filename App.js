import React from "react";
import ReactDOM from "react-dom/client"
// const parent = React.createElement("h1", {}, "Hi!")
const parent = <h1>Hi!</h1>
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
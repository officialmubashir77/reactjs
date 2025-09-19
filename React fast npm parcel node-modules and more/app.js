import React from "react";
import ReactDOM from "react-dom/client";

{/* <div id="container">
    <h1>I am heading 1</h1>
    <h2>I am heading 2</h2>
</div> */}

// Key prop 
const structureDiv = React.createElement("div", { id: "container" },
    [
        React.createElement("h1", {key : "h1"}, "I am heading 1"),
        React.createElement("h2", {key : "h2"}, "I am heading 2")
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(structureDiv);

// Webpack -> npx create-react-app 
// Vite -> npm create vite@latest
// Parcel -> npm init -y && npm install parcel
// npm 
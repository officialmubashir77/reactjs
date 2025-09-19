{/* <div id="container">
    <h1>I am heading 1</h1>
    <h2>I am heading 2</h2>
</div> */}

const structureDiv = React.createElement("div", { id: "container" },
    [
        React.createElement("h1", {}, "I am heading 1"),
        React.createElement("h2", {}, "I am heading 2")
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(structureDiv);

// Webpack
// Vite 
// Parcel

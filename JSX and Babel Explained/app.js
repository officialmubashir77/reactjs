import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", { id: "heading1" }, "I am heading 1");

//JSX
const age = 23;
const JsxHeading = <h1 className="heading" id="heading2">
        My Name is Mubashir and I am {age} years old
    </h1>;
console.log(JsxHeading);

// JSX is something which looks like HTML but it is not HTML
// JSX browser understand nahi krta hai isliye hume Babel ka use krna padta hai
// Babel -> Transpiler -> ES6+ to ES5
// Babel -> JSX to React.createElement() -> HTML

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Componenets is a normal function which returns JSX
// Class based components -> not used now a days
// Functional based components -> used now a days
// same as
const fun = () => true;

// same as
const fun2 = () => {
    return true;
}

function Heading() {
    return (
        <>
            <h1>This is a heading One</h1>;
        </>
    )
}

function Heading2() {
    return (
        <>
            {/* {JsxHeading} */}
            <Heading />
            <Heading />
            <Heading />
            <Heading />
            <h1>This is a heading from component</h1>;
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root")); 
// root.render(jsxHeading);
root.render(<Heading2 />); // component ko render krne ke liye hume uska tag banana padta hai

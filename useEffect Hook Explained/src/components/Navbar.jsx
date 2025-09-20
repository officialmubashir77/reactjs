import { useEffect, useState } from 'react';

const Navbar = () => {

    const [lightMode, setlightMode] = useState("Light")

    useEffect(() => {
        if (lightMode === "Light") {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
    }, [lightMode]);
    
    return (
        <nav className="navbar">    
            <div className="logo">Logo</div>
            <ul className="menu">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
                <li>
                    <button onClick={() => {
                        setlightMode(lightMode === "Light" ? "Dark" : "Light")
                    }} className="dark-mode-toggle">{lightMode}</button>
                </li>
            </ul>
            
        </nav>
    );
};

export default Navbar;


const Navbar = () => {
    // Internal CSS
    const navbarStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",  
        padding: "1rem",
        backgroundColor: "#333",
        color: "white"
    }
    
    return (
        <nav className="navbar" style={navbarStyle}>    
            <div className="logo">Logo</div>
            <ul className="menu">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
import "./Header.css";
function Header() {
    return (
        <div className="nav-container">
            <div>
                <img src="./brand logo.png" alt="logo" />
            </div>
            <div className="navigation">
                <nav>
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </div>
            <div>
                <button className="btn">Free trial</button>
            </div>
        </div>
    );
}
export default Header;
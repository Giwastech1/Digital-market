import React from "react";
import "./SubscriptionBox.css";

function SubscriptionBox() {
    return (
        <>
            <div className="subscription-box">
                <div className="subscription-content">
                    <h2 className="subscription-heading">
                        Subscribe to get information, latest news and other interesting offers about
                    </h2>

                    <div className="logo-placeholder">
                        <img src="./brand logo.png" alt="logo" />
                    </div>

                    <form className="subscription-form">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="subscription-input"
                        />
                        <button type="submit" className="subscription-button">
                            Subscribe
                        </button>
                    </form>
                    <img src="/Cube.png" alt="" className="cube-img" />
                </div>
            </div>
            <div className="footer">
                <div className="footer-section">
                    <h3 className="footer-logo">markethink</h3>
                    <p className="footer-text">
                        Marketing is a company that focus<br />
                        on developing company's strategy<br />
                        for increase digital marketing
                    </p>

                    <div className="footer-socials ">
                        <span className="social-icon"><img src="/facebook.png" alt="" /></span>
                        <span className="social-icon"><img src="/twitter.png" alt="" /></span>
                        <span className="social-icon"><img src="/instagram.png" alt="" /></span>
                    </div>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Menu</h4>
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Pricing About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Services</h4>
                    <ul>
                        <li>Content Strategy</li>
                        <li>Content Development</li>
                        <li>Content Creation</li>
                        <li>Content Optimization</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Company</h4>
                    <ul>
                        <li>Site Map</li>
                        <li>Terms of Use</li>
                        <li>Privacy Notice</li>
                        <li>Cookies</li>
                        <li>Modern Slavery</li>
                    </ul>
                </div>
            </div>

            <p className="footer-copy">© Copyright Marketthink. All right reserved</p>
        </>
    );
};

export default SubscriptionBox;
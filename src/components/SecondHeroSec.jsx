import Content from "./Content";
import "./SecondHeroSec.css";
function SecondHeroSec() {
    return (
        <>
            <div className="container">
                <div className="text">
                    <h2 className="heading">We're Strategic Digital Marketing Agency</h2>
                    <p className="paragraph">We've created a full-stack structure for our working workflow processe, were from the funny the century initial all made, have spare to negatives </p>
                    <a href="" className="link">See More <span>&rarr;</span></a>
                </div>
                <div className="content-box">
                    <Content img="/Group 542.png"
                        heading="Content Strategy"
                        content="All our content marketing service packages include a custom content strategy"
                    />
                    <Content img="/Group 555.png"
                        heading="Content Development"
                        content="We create some content calendar for your company's must-share content"
                    />
                    <Content img="/Group 556.png"
                        heading="Content Creation"
                        content="Experienced in copywriting and marketing team begins creating content"
                    />
                    <Content img="/glass.png"
                        heading="Content Optimization"
                        content="Your content marketing management services also include SEO"
                    />
                </div>
            </div>
            <div className="lower-container">
                <div>
                    <img src="/Group 636.png" alt="" className="media-icon" />
                </div>
                <div className="lower-text">
                    <h2 className="heading lower-heading">Increase Business on Social Media Reach</h2>
                    <p className="paragraph lower-paragraph">Using our network of industry influencers, we help promote your content</p>
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </>
    );
}
export default SecondHeroSec;
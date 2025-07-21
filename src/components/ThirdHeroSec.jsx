import "./ThirdHeroSec.css";
import ThirdHeroContent from "./ThirdHeroContent";
function ThirdHeroSec() {
    return (
        <div className="container">
            <div className="left-content">
                <h2 className="left-heading heading">Read More Articles From Our Blog</h2>
                <img src="/Rectangle 333.png" alt="" className="img-size" />
                <small className="date paragraph">AUGUST 17, 2021</small>
                <p className="heading">10 Reasons to invest in SEO copywriting services</p>
                <button className="read-button">Read More</button>
            </div>
            <div className="third-lower-content">
                <ThirdHeroContent heading="Content Writing"
                    img="/Rectangle 335.png"
                    date="AUGUST 17, 2021"
                    subHeading="How to get hired at a top Digital Marketing"
                    content="Agency life. We've all seen the photos posted on social media - the cool..."
                    icon="/Eye.png"
                />
                <ThirdHeroContent heading="Content Marketing"
                    img="/Rectangle 334.png"
                    date="AUGUST 17, 2021"
                    subHeading="Copywriting guidelines during the coronavirus"
                    content="Since the coronavirus hit earlier this year, it's hard to go anywhere..."
                    icon="Eye.png" />
            </div>
        </div>
    );
}
export default ThirdHeroSec;
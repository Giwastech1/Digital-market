function ThirdHeroContent(props) {
    return (
        <div>
            <h4 className="lower-title">{props.heading}</h4>
            <img src={props.img} alt="" className="lower-img-size" />
            <small className="date paragrapgh">{props.date}</small>
            <h4 className="sub-content heading">{props.subHeading}</h4>
            <p className="sub-content paragragh">{props.content}</p>
            <img src={props.icon} alt="eye" className="eye" />
        </div>
    );
}
export default ThirdHeroContent;
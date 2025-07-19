function Content(props) {
    console.log(props);
    return (
        <div className="content-cont">
            <img src={props.img} alt="" />
            <h3 className="heading">{props.heading}</h3>
            <p className="paragraph">{props.content}</p>
        </div>
    );
}
export default Content;
function OurExpertiseBoxs(props) {
  //const { tag: HeadingTag = 'h5' } = props;

  return (
    <>
      <div className={`expertise-item ${props.className || ''}`}>
        <div className="expertise-icon">
          <img className="img-fluid center-block w-25" src={props.imgSrc} alt="" />
          <h5 className="mb-4 mt-3 text-white">{props.title}</h5>
        </div>
        <div className="expertise-list">
          <ul>
            {props.listItem.map((list, index) => (
              <li key={index} className="text-white">
                {list.list}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default OurExpertiseBoxs;

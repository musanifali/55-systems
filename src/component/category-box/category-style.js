import React from 'react';
import './category-style.scss';

function CategoryBoxStyle(props) {
  return (
    <>
      <div className={`category-item ${props.style || 'category-style1'}`}>
        <div className="category-icon">
          <i className={props.icon}></i>
          <h5 className="category-title">{props.title}</h5>
        </div>
        <div className="category-list">
          <ul>
            {props.list.map((val, ind) => (
              <li key={ind}>{val.item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function CategoryBoxStyle2(props) {
  return (
    <div className={`category-item category-style2 ${props.className || ''}`}>
      <div className="category-icon">
        <i className={props.icon}></i>
        <h5 className="category-title">{props.title}</h5>
      </div>
      <div className="category-list">
        <ul>
          {props.list.map((list, index) => (
            <li key={index}>{list.item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CategoryBoxStyle3(props) {
  return (
    <a
      href="#"
      className={`category-item category-style3 ${props.themeColor || ''} ${
        props.boxalign || ''
      } ${props.className || ''}`}
    >
      <img
        className="img-fluid w-25"
        src={props.categoryImg}
        alt={props.title}
      />
      <h5 className="category-title">{props.title}</h5>
    </a>
  );
}

export default CategoryBoxStyle;
export { CategoryBoxStyle2, CategoryBoxStyle3 };

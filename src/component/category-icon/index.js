import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function CategoryIcon(props) {
  return (
    <div className="category-icons">
      <div className="category-item">
        <div className="item-icon">
          <i className={props.icon}></i>
        </div>
        {props.link ? (
          <Link to={props.link} className="category-title">
            {props.title}
          </Link>
        ) : (
          <span className="category-title">{props.title}</span>
        )}
      </div>
    </div>
  );
}
function CategoryIcon02(props) {
  return (
    <div className={`category-icons ${props.extraClass || ''}`}>
      <a className="category-item">
        {props.link ? (
          <Link
            to={props.link}
            className={`category-title ${props.titleextraClass || ''}`}
          >
            {props.title}
          </Link>
        ) : (
          <span className={`category-title ${props.titleextraClass || ''}`}>
            {props.title}
          </span>
        )}
        <div className={`item-icon ${props.iconextraClass || ''}`}>
          <i className={props.icon}></i>
        </div>
      </a>
    </div>
  );
}

export default CategoryIcon;
export { CategoryIcon02 };

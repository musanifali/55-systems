import React from 'react';
import '../widget.scss';
import { Link } from 'react-router-dom';

function ContactInfo(props) {
  return (
    <>
      <div
        className={`widget widget-contact-info ${props.theme || ''} ${
          props.className || ''
        }`}
      >
        {props?.title && <h3 className="widget-title">{props.title}</h3>}

        <ul className="info-list">
          <li key="item1">
            {props.theme === 'contact-info-style-01' && (
              <i className="fa fa-location-dot"></i>
            )}
            {/* {props.theme === "contact-info-style-02" && <label>Address :</label>} */}
            {props.theme === 'contact-info-style-02' && props.label
              ? null
              : props.theme === 'contact-info-style-02' && (
                  <label>Address :</label>
                )}
            <span>293-MB 4th Floor Phase -6, DHA LAHORE</span>
          </li>
          <li key="item3">
            {props.theme === 'contact-info-style-01' && (
              <i className="far fa-envelope"></i>
            )}
            {props.theme === 'contact-info-style-02' && props.label
              ? null
              : props.theme === 'contact-info-style-02' && (
                  <label>Email :</label>
                )}
            <Link to="mailto:letstalk@55systems.com">letstalk@55systems.com</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactInfo;

import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Site Data
// External default page header image
const PagaHeaderImg = 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80';

// SCSS
import './page-header.scss';

function PageHeader(props) {
  return (
    <div
      className={`page-header ${props.bgImageHide ? 'bg-hide' : ''} theme-${
        props.theme
      }`}
      style={
        props.bgImageHide
          ? null
          : {
              backgroundImage: `url(${props.PagaHeaderBg || PagaHeaderImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }
      }
    >
      {props.bgImageHide ? null : (
        <div
          className="page-header-overlay"
          style={props.overlay ? { backgroundColor: props.overlay } : null}
        ></div>
      )}
      <div className="page-header-wrapper">
        <Container>
          <Row className="d-flex justify-content-center">
            <div className={props.colSize || 'col-md-8'}>
              <div className="page-header-inner">
                <h2 className="page-header-title">{props.title}</h2>
                {props?.description && <p>{props.description}</p>}
                {props?.breadCrumbItems && (
                  <ul className="page-breadcrumbs">
                    {props.breadCrumbItems.map((item, index) => {
                      return item.active ? (
                        <li key={index} className="breadcrumb-item active">
                          {item.label}
                        </li>
                      ) : (
                        <li key={index} className="breadcrumb-item">
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default PageHeader;

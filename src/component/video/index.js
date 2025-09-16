import { useState } from 'react';
import Ratio from 'react-bootstrap/Ratio';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// External default video image
const defaultImage = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80';
import './video.scss';

function VideoPopup(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={`video-popup ${props.theme || ''}`}>
        <Button
          className="video-btn"
          variant="primary"
          onClick={() => setShow(true)}
        >
          <i className="fas fa-play fa-1x"></i>
        </Button>
        {(props?.theme === 'video-style-2') === !props.imageHide || (
          <img
            alt="video-image"
            className="img-fluid image-link border-radius-7"
            src={props.videoImage || defaultImage}
          />
        )}
      </div>

      <Modal
        show={show}
        size={props.size || 'md'}
        onHide={() => setShow(false)}
        dialogClassName="pgs-video-popup"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Ratio aspectRatio="16x9">
            <iframe
              src={props.videoURL}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Ratio>
        </Modal.Body>
      </Modal>
    </>
  );
}

function VideoPopup2(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={`video-popup video-popup-style-02 ${props.theme || ''}`}>
        <Button
          className="video-btn"
          variant="primary"
          onClick={() => setShow(true)}
        >
          <i className="fas fa-play fa-1x"></i>
        </Button>
        <a href="#">See Our Video</a>
      </div>

      <Modal
        show={show}
        size={props.size || 'md'}
        onHide={() => setShow(false)}
        dialogClassName="pgs-video-popup"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Ratio aspectRatio="16x9">
            <iframe
              src={props.videoURL}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Ratio>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoPopup;
export { VideoPopup2 };

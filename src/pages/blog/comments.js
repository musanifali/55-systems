import { Link } from 'react-router-dom';

// Site Data
// External comment author images from Unsplash
const authorImage1 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=80&q=80';
const authorImage2 = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=80&q=80';
const authorImage3 = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&w=80&q=80';
const authorImage4 = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=80&q=80';
const authorImage5 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=80&q=80';

// SCSS
import './comments.scss';

function BlogComments(props) {
  return (
    <>
      <div className={`comments ${props.className || ''}`}>
        <h4 className="comments-title">{props.title}</h4>
        <ul className="comment-list">
          <li className="comment">
            <div className="comment-box">
              <div className="author-image">
                <img
                  className="img-fluid"
                  src={authorImage1}
                  alt="Alice Williams"
                />
              </div>
              <div className="author-info">
                <div className="title-area">
                  <h6 className="title">Alice Williams</h6>
                  <Link className="reply-btn" to="#">
                    <i className="fas fa-reply pe-2"></i>Reply
                  </Link>
                </div>
                <div className="content-area">
                  <p>
                    Then work backwards to develop the plan. What steps are
                    required to get you to the goals? Make the plan as detailed
                    as possible. Try to visualize and then plan.
                  </p>
                </div>
              </div>
            </div>
            <ul className="comment-list">
              <li className="comment">
                <div className="comment-box">
                  <div className="author-image">
                    <img
                      className="img-fluid"
                      src={authorImage2}
                      alt="Mellissa Doe"
                    />
                  </div>
                  <div className="author-info">
                    <div className="title-area">
                      <h6 className="title">Mellissa Doe</h6>
                      <Link className="reply-btn" to="#">
                        <i className="fas fa-reply pe-2"></i>Reply
                      </Link>
                    </div>
                    <div className="content-area">
                      <p>
                        Every possible setback. Commit the plan to paper and
                        then keep it with you at all times. Review it regularly
                        and ensure that every step takes you closer.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="comment">
                <div className="comment-box">
                  <div className="author-image">
                    <img
                      className="img-fluid"
                      src={authorImage3}
                      alt="Paul Flavius"
                    />
                  </div>
                  <div className="author-info">
                    <div className="title-area">
                      <h6 className="title">Paul Flavius</h6>
                      <Link className="reply-btn" to="#">
                        <i className="fas fa-reply pe-2"></i>Reply
                      </Link>
                    </div>
                    <div className="content-area">
                      <p>
                        Every possible setback. Commit the plan to paper and
                        then keep it with you at all times. Review it regularly
                        and ensure that every step takes you closer.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="comment">
            <div className="comment-box">
              <div className="author-image">
                <img
                  className="img-fluid"
                  src={authorImage4}
                  alt="Michael Bean"
                />
              </div>
              <div className="author-info">
                <div className="title-area">
                  <h6 className="title">Michael Bean</h6>
                  <Link className="reply-btn" to="#">
                    <i className="fas fa-reply pe-2"></i>Reply
                  </Link>
                </div>
                <div className="content-area">
                  <p>
                    Then work backwards to develop the plan. What steps are
                    required to get you to the goals? Make the plan as detailed
                    as possible. Try to visualize and then plan.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="comment">
            <div className="comment-box">
              <div className="author-image">
                <img
                  className="img-fluid"
                  src={authorImage5}
                  alt="Homer Reyes"
                />
              </div>
              <div className="author-info">
                <div className="title-area">
                  <h6 className="title">Homer Reyes</h6>
                  <Link className="reply-btn" to="#">
                    <i className="fas fa-reply pe-2"></i>Reply
                  </Link>
                </div>
                <div className="content-area">
                  <p>
                    Then work backwards to develop the plan. What steps are
                    required to get you to the goals? Make the plan as detailed
                    as possible. Try to visualize and then plan.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BlogComments;

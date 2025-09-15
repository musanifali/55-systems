import { Link } from 'react';
import ReactPlayer from 'react-player';
import '../bg-video/bg-video.scss';
import TextTyper from '../text-typer/text-typer';

const BackgroundVideo = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=AqcjdkPMPJA';

  return (
    <div className="background-video">
      <ReactPlayer
        url={videoUrl}
        playing
        loop
        muted
        width="100%"
        // height="84vh"
      />

      <div className="banner-item">
        <div>
          <h1 className="text-white">
            Website for{' '}
            <TextTyper
              words={['Digital Agency', 'IT Solution', 'SEO Service']}
              delay={150}
              deleteDelay={800}
              loop={true}
            />
          </h1>
          <h6>
            We enable constant enterprise transformation at speed and scale.
          </h6>
        </div>
        {/* <Link className="btn-secondary" to="#">
          Get Started Now <i className="fas fa-arrow-right"></i>
        </Link> */}
      </div>
    </div>
  );
};

export default BackgroundVideo;

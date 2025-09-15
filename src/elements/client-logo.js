import React from 'react';

import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PageHeader from '../layouts/page-header/PageHeader';
import ClientLogoList, {
  AwardLogoList,
  ClientLogoList2,
} from '../data/client-logo-list';
import ClientLogo from '../component/client-logo';

function ElementsClientLogo() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Client Logo"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Client Logo', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper section-pb">
          <section className="section-ptb">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Swiper
                    modules={[A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                  >
                    {ClientLogoList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <ClientLogo
                            key={ind}
                            className="cl-size-lg"
                            theme="logo-default"
                            data={val.imgSrc}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>

          <section className="section-ptb bg-light">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Swiper
                    modules={[A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                  >
                    {AwardLogoList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <ClientLogo
                            key={ind}
                            className="cl-size-md"
                            theme="logo-grayscale"
                            data={val.imgSrc}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>

          <section className="section-ptb bg-secondary">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Swiper
                    modules={[A11y]}
                    spaceBetween={30}
                    slidesPerView={6}
                  >
                    {ClientLogoList2.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <ClientLogo
                            key={ind}
                            className="cl-size-sm"
                            theme="logo-light"
                            data={val.imgSrc}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsClientLogo;

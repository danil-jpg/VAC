import React, { useRef, useEffect } from "react";
import PageTitle from "../../molecules/pageTitle/PageTitle";
import s from "./videoPage.module.scss";
import { register } from "swiper/element/bundle";
import { params } from "../../Utils/SwiperParams";

const VideoPage = () => {
  const swiperRef = useRef(null);

  register();

  const swiperParams = {
    loop: true,
    slidesPerView: 1,
    on: {
      init() {},
    },
    pagination: "bullet",
  };

  useEffect(() => {
    const swiperEl2 = swiperRef.current;
    Object.assign(swiperEl2, swiperParams, params);
    swiperEl2.initialize();
  }, []);

  return (
    <>
      <PageTitle text={"Vehicle videos"} />
      <swiper-container init="false" ref={swiperRef} class="slider4">
        <swiper-slide>
          <div className={`${s.videoSec} container`}>
            <div className={s.videoCardWr}>
              <div className={s.videoFrameWr}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Os8RmL5Y_yw"></iframe>
              </div>
              <p className={s.videoText}>VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback</p>
            </div>
            <div className={s.videoCardWr}>
              <div className={s.videoFrameWr}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Os8RmL5Y_yw"></iframe>
              </div>
              <p className={s.videoText}>VAC's Vehicle Shoot #11: Toyota Highlander</p>
            </div>
            <div className={s.videoCardWr}>
              <div className={s.videoFrameWr}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Os8RmL5Y_yw"></iframe>
              </div>
              <p className={s.videoText}>VAC's Vehicle Shoot #09: 2019 Mazda CX-5</p>
            </div>
            <div className={s.videoCardWr}>
              <div className={s.videoFrameWr}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Os8RmL5Y_yw"></iframe>
              </div>
              <p className={s.videoText}>Some Vehicles VAC Offers!</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className={`${s.videoSec} container`}>
            <div className={s.videoCardWr}>
              <div className={s.videoFrameWr}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Os8RmL5Y_yw"></iframe>
              </div>
              <p className={s.videoText}>VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback</p>
            </div>
            <div className={s.videoCardWr}>
              <div className={s.videoFrameWr}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Os8RmL5Y_yw"></iframe>
              </div>
              <p className={s.videoText}>VAC's Vehicle Shoot #11: Toyota Highlander</p>
            </div>
            <div className={s.videoCardWr}>
              <div className={s.videoFrameWr}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Os8RmL5Y_yw"></iframe>
              </div>
              <p className={s.videoText}>VAC's Vehicle Shoot #09: 2019 Mazda CX-5</p>
            </div>
            <div className={s.videoCardWr}>
              <div className={s.videoFrameWr}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Os8RmL5Y_yw"></iframe>
              </div>
              <p className={s.videoText}>Some Vehicles VAC Offers!</p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </>
  );
};

export default VideoPage;

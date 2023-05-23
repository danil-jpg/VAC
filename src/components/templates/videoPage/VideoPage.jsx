import React from "react";
import PageTitle from "../../molecules/pageTitle/PageTitle";
import s from "./videoPage.module.scss";

const VideoPage = () => {
  return (
    <>
      <PageTitle text={"Vehicle videos"} />
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
    </>
  );
};

export default VideoPage;

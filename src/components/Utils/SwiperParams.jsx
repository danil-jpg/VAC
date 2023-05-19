export const params = {
  injectStyles: [
    `
	  .swiper-button-next , .swiper-button-prev{
		  background-image: url(${require("../../assets/img/components/slider1/arrow.png")});
		  width: 53px;
		  height: 53px;
	  }

	  .swiper-button-next {
		  position: absolute;
		  right: 5px;
		  top: 47%;

		  @media screen and (max-width: 1200px) {
			  right: 60px;
		  };

		  @media screen and (max-width: 767px) {
			  right: 0px;
			  top: 51%;
			  width: 35px;
			  height: 35px;
			  background-size: contain;
		  }
		}

		.swiper-button-prev {
		  position: absolute;
		  left: 5px;
		  top: 47%;
		  transform: rotate(180deg);

		  @media screen and (max-width: 1200px) {
			  left: 60px;
		  };

		  @media screen and (max-width: 767px) {
			  left: 0px;
			  top: 51%;
			  width: 35px;
			  height: 35px;
			  background-size: contain;
		  }
		}

		.swiper-button-next2 , .swiper-button-prev2{
			background-image: url(${require("../../assets/img/components/slider2/arrow.svg")});
			top: 49%;

			@media screen and (max-width: 1200px) {
				top: 47%;
			}
		}
		.swiper-button-next2{
			@media screen and (max-width: 1200px) {
				right: 0;
			}
		}
		.swiper-button-prev2{
			@media screen and (max-width: 1200px) {
				left: 0;
			}
		}

		.swiper-button-next2{
			@media screen and (max-width: 767PX) {
				top: 34%;
			}
		}
		.swiper-button-prev2{
			@media screen and (max-width: 767PX) {
				top: 34%;
			}
		}
			`,
  ],
};

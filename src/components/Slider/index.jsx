import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import './slider.scss';
import classes from "./slider.module.scss"

export default function Slider() {
  return (
    <div className={classes.slider}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        loopPreventsSliding={false}
        loop={true}
        navigation
      >
        <SwiperSlide>
          <div className={classes.slide}>
            <div className={classes.left}>
              <div>
                <h2>
                  <span>Stan Smith</span>,
                  Forever!
                </h2>

                <button className='btn'>КУПИТЬ</button>
              </div>
            </div>

            <div className={classes.right}>
              <img src="/img/slider.jpg" alt="" />
            </div>

            <img src="/img/slider-left-icon.jpg" alt="" className={classes.icon} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={classes.slide}>
            <div className={classes.left}>
              <div>
                <h2>
                  <span>Stan Smith</span>,
                  Forever!
                </h2>

                <button className='btn'>КУПИТЬ</button>
              </div>
            </div>

            <div className={classes.right}>
              <img src="/img/slider.jpg" alt="" />
            </div>

            <img src="/img/slider-left-icon.jpg" alt="" className={classes.icon} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

  )
}



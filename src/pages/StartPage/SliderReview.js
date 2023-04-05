import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
// import './project.css'


import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay , Scrollbar, A11y } from "swiper";
import 'swiper/css/scrollbar';
// Import Swiper React components
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';

const SliderReview = () => {
    return (
        <div className='lg:w-4/12 md:w-6/12 w-full px-8 mx-auto my-20'>
        <Swiper
           slidesPerview={1}
           
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            pagination={{
              clickable: true,
              
            }}
            modules={[Pagination, Autoplay , A11y]}

      
          >
              <SwiperSlide className='mb-12 '>
                <div >
                    <div className='flex justify-center my-4'>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                     </div>
                    <h2 className='italic'>So easy to use! I use this every time I shop on the web and before you know it you have a lot of cash back! Redeeming your cash is very easy to do also! Highly recommended!</h2>
                    <h2 className='text-gray-800 flex justify-end '>- <span className='italic mx-2'> Hasan </span> R</h2>
                </div>
                </SwiperSlide>
              <SwiperSlide className='mb-12 '>
                <div >
                    <div className='flex justify-center my-4'>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                     </div>
                    <h2 className='italic' > Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s,</h2>
                    <h2 className='text-gray-800 flex justify-end '>- <span className='italic mx-2'> Mahmud </span> R</h2>
                </div>
                </SwiperSlide>
             <SwiperSlide className='mb-12 '>
                <div >
                    <div className='flex justify-center my-4'>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                     </div>
                    <h2 className='italic' >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</h2>
                    <h2 className='text-gray-800 flex justify-end '>- <span className='italic mx-2'> Biswas </span> R</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className='mb-12 '>
                <div >
                    <div className='flex justify-center my-4'>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                        <AiFillStar className='text-yellow-600 lg:text-xl text-lg '></AiFillStar>
                     </div>
                    <h2 className = 'italic' > There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don 't look even slightly believable.</h2>
                    <h2 className='text-gray-800 flex justify-end '>- <span className='italic mx-2'> Dip </span> R</h2>
                </div>
            </SwiperSlide>
                
            
          </Swiper>
        </div>
    );
};

export default SliderReview;
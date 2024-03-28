"use client"
import Image from 'next/image';
import React from 'react';
import img5 from './../../assest/img5.png'
import img6 from './../../assest/img6.png'
import img7 from './../../assest/img7.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Collection = () => {
    return (
        <section className='container my-20 '>
            <div className='text-center my-20'>
                <h1 className='text-2xl font-bold mb-2'>Collection Spotlight</h1>
                <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            </div>

            <Swiper className='px-10 w-[1000px] '
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-xl my-20 mx-10 gap-6'>
                        <SwiperSlide>
                            <div className='shadow-xl'>
                                <Image src={img5} alt="player" width={226} height={401} style={{
                                    margin: "auto",
                                }}></Image>

                                <div className='text-center my-4 border-dashed border-[#A9ACB2] border-t-2'>

                                    <h1 className=' text-center font-medium my-1'>Las Vegas Aviators</h1>
                                    <p className='text-base font-normal'>OCT|SUN|4.30 PM</p>
                                    <p className='font-normal text-sm'>Las Vegas Ballpark, Las Vegas, Nevada</p>
                                    <button className='btn bg-black mx-4 my-2 text-[#FFFFFF] px-10 py-2 font-medium'>Take Flight Collection</button>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>

                            <div className='shadow-xl '>
                                <Image src={img6} alt="player" width={226} height={401} style={{
                                    margin: "auto",
                                }}></Image>
                                <div className='text-center my-4 border-dashed border-[#A9ACB2] border-t-2'>
                                    <h1 className=' text-center font-medium my-1'>Sacramento River Cats</h1>
                                    <p className='text-base font-normal'>OCT|SUN|4.30 PM</p>
                                    <p className='font-normal text-sm'>Las Vegas Ballpark, Las Vegas, Nevada</p>
                                    <button className='btn bg-black mx-4 my-2 text-[#FFFFFF] px-10 py-2 font-medium'>Take Flight Collection</button>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='shadow-xl'>
                                <Image src={img5} alt="player" width={226} height={401} style={{
                                    margin: "auto",
                                }}></Image>

                                <div className='text-center my-4 border-dashed border-[#A9ACB2] border-t-2'>
                                    <h1 className=' text-center font-medium my-1'>Las Vegas Aviators</h1>
                                    <p className='text-base font-normal'>OCT|SUN|4.30 PM</p>
                                    <p className='font-normal text-sm'>Las Vegas Ballpark, Las Vegas, Nevada</p>

                                    <button className='btn bg-black mx-4 my-2 text-[#FFFFFF] px-10 py-2 font-medium'>Take Flight Collection</button>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='shadow-xl'>
                                <Image src={img5} alt="player" width={226} height={401} style={{
                                    margin: "auto",
                                }}></Image>

                                <div className='text-center my-4 border-dashed border-[#A9ACB2] border-t-2'>
                                    <h1 className=' text-center font-medium my-1'>Las Vegas Aviators</h1>
                                    <p className='text-base font-normal'>OCT|SUN|4.30 PM</p>
                                    <p className='font-normal text-sm'>Las Vegas Ballpark, Las Vegas, Nevada</p>

                                    <button className='btn bg-black mx-4 my-2 text-[#FFFFFF] px-10 py-2 font-medium'>Take Flight Collection</button>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='shadow-xl '>
                                <Image src={img5} alt="player" width={226} height={401} style={{
                                    margin: "auto",
                                }}></Image>

                                <div className='text-center my-4 border-dashed border-[#A9ACB2] border-t-2'>
                                    <h1 className=' text-center font-medium my-1'>Las Vegas Aviators</h1>
                                    <p className='text-base font-normal'>OCT|SUN|4.30 PM</p>
                                    <p className='font-normal text-sm'>Las Vegas Ballpark, Las Vegas, Nevada</p>

                                    <button className='btn bg-black mx-4 my-2 text-[#FFFFFF] px-10 py-2 font-medium'>Take Flight Collection</button>
                                </div>

                            </div>
                        </SwiperSlide>

                    </div>

            </Swiper>

        </section>
    );
};

export default Collection;




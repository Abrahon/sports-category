// import React from 'react';
"use client"
import Image from 'next/image';
import img1 from './../../assest/img1.png'
import img2 from './../../assest/img2.png'
import img3 from './../../assest/img3.png'
import img8 from './../../assest/img8.jpeg'
import { BsSun } from 'react-icons/bs';
import { FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';


const Sports = () => {
    const { theme, setTheme } = useTheme()

    return (
        <>
            <section className='container my-10'>
                <div className='flex justify-between '>
                    <div className='border-b-2 border-[#738FFF]'>
                        <h1 className='font-semibold'>Sports</h1>
                    </div>
                    {theme === "dark" ? (
                        <BsSun size={25} cursor="pointer" onClick={() => setTheme('light')} />
                    ) : (
                        <FiMoon size={25} cursor="pointer" onClick={() => setTheme('dark')} />
                    )}
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full my-10'>

                    <div className='shadow-xl p-2'>
                        <Image className='h-[386px]' src={img1} alt='player' ></Image>
                        <div className='my-4'>
                            <h1 className='font-medium mb-4'>Sacramento River Cats</h1>
                            <div className='flex justify-start px-2 gap-4'>
                                <div className='font-normal'>
                                    <p><small>Total Events</small></p>
                                    <p>48 Events</p>

                                </div>
                                <div className='font-medium'>
                                    <p><small>Sports</small></p>
                                    <p>Baseball</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl p-2'>
                        <Image className='h-[386px]' src={img2} alt="player"></Image>
                        <div className='my-4'>
                            <h1 className='font-medium mb-4'>Las Vegas Aviators</h1>
                            <div className='flex justify-start px-2 gap-4'>
                                <div className='font-normal'>
                                    <p><small>Total Events</small></p>
                                    <p>28 Events</p>
                                </div>
                                <div className='font-medium '>

                                    <p><small>Sports</small></p>
                                    <p>Baseball</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='shadow-xl p-2'>
                        <Image className='h-[386px]' src={img3} alt="player" ></Image>
                        <div className='my-4'>
                            <h1 className='font-medium mb-4'>new jersey devils</h1>
                            <div className='flex justify-start px-2 gap-4'>
                                <div className='font-normal'>
                                    <p><small>Total Events</small></p>
                                    <p>15 Events</p>

                                </div>
                                <div className='font-medium'>
                                    <p><small>Sports</small></p>
                                    <p>Ice Hockey</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='shadow-xl p-2'>
                        <Image className='h-[386px]' src={img2} alt="player" ></Image>
                        <div className='my-4'>
                            <h1 className='font-medium mb-4'>Las Vegas Aviators</h1>
                            <div className='flex justify-start px-2 gap-4'>
                                <div className='font-normal'>
                                    <p><small>Total Events</small></p>
                                    <p>48 Events</p>
                                </div>
                                <div className='font-medium'>
                                    <p><small>Sports</small></p>
                                    <p>Baseball </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl p-2'>
                        <Image className='h-[218px]' src={img8} alt="logo" width={218} height={218}></Image>
                        <div className='my-4'>
                            <h1 className='font-medium mb-4'>Advertisement title</h1>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid eum corrupti maiores quibusdam velit! Soluta, consectetur, eius eveniet ad ullam inventore unde asperiores natus ducimus exercitationem odio? Reiciendis, iusto!</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button
                        className="bg-[#2C9CF0] px-6 py-3 text-[#FFFFFF] rounded-md"
                        type="button">
                        See More
                    </button>
                </div>

            </section>
        </>
    );
};

export default Sports;
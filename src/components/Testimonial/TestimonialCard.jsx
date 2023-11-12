import React from 'react';
import { HiStar } from 'react-icons/hi';
import { SwiperSlide } from 'swiper/react';

const TestimonialCard = ({ testimonial }) => {
    const { name, desc, img } = testimonial;
    return (
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src={img} alt="" className='w-[44px] h-[44px] rounded-full' />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>{name}</h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                        </div>
                    </div>
                </div>

                <p className='text-[16px] leading-7 mt-4 text-textColor font-400'>{desc}</p>
            </div>
        </SwiperSlide>
    )
}

export default TestimonialCard
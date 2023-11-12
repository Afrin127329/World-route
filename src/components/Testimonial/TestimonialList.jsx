import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '../../assets/data/testimonials';
// import TestimonialCard from './TestimonialCard';
import { HiStar } from 'react-icons/hi';

const TestimonialList = () => {
    return (
        <div className='mt-[30px] lg:mt-[55px]'>
            <Swiper spaceBetween={30} modules={[Pagination, Navigation, Autoplay]} slidesPerView={1} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} loop={true} pagination={{ clickable: true }} breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }}>

                {testimonials.map((item) =>
                    <div key={item.id}>
                        <SwiperSlide>
                            <div className='py-[30px] px-5 rounded-3'>
                                <div className='flex items-center gap-[13px]'>
                                    <img src={item.img} alt="" className='w-[44px] h-[44px] rounded-full' />
                                    <div>
                                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>{item.name}</h4>
                                        <div className='flex items-center gap-[2px]'>
                                            <HiStar className='text-yellowColor w-[18px] h-5' />
                                            <HiStar className='text-yellowColor w-[18px] h-5' />
                                            <HiStar className='text-yellowColor w-[18px] h-5' />
                                            <HiStar className='text-yellowColor w-[18px] h-5' />
                                            <HiStar className='text-yellowColor w-[18px] h-5' />
                                        </div>
                                    </div>
                                </div>

                                <p className='text-[16px] leading-7 mt-4 text-textColor font-400'>{item.desc}</p>
                            </div>
                        </SwiperSlide>
                    </div>
                )}

            </Swiper>
        </div>
    )
}

export default TestimonialList
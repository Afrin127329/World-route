import { BiSolidPhoneCall } from 'react-icons/bi';
import { GiMountainRoad, GiParachute, GiWildfires } from 'react-icons/gi';
import { TbBeach } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import avatarImg from '../assets/images/avatar.jpg';
import bookingIcon from '../assets/images/bookingIcon.jpg';
import heroImg1 from '../assets/images/heroImg01.jpg';
import heroImg2 from '../assets/images/heroImg02.jpg';
import heroImg3 from '../assets/images/heroImg03.jpg';
import About from '../components/About/About';
import DestinationList from '../components/Destinations/DestinationList';
import ServiceList from '../components/Services/ServiceList';
const Home = () => {
  return (
    <>
      {/* Hero Section Starts */}
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* Hero Content Starts */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[68px] md:leading-[70px]">Your Trip Starts Here!</h1>
                  <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit rem nisi maxime iusto delectus nam ipsam inventore voluptas pariatur hic optio quo ipsum et repellat iure, asperiores necessitatibus similique.</p>
                  <button className="btn">Request a Booking</button>
                </div>

                {/* Hero Counter  */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  {/* 1st Section  */}
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-700 text-headingColor">100+</h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Places to Travel</p>
                  </div>

                  {/* 2nd Section  */}
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-700 text-headingColor">2000+</h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Satisfied Users</p>
                  </div>

                  {/* 3rd Section  */}
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-700 text-headingColor">250+</h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Positive Reviews</p>
                  </div>
                </div>
              </div>
              {/* Hero Content Ends */}

              <div className="flex gap-[30px] flex-col">
                <div className='flex flex-col md:flex-row gap-[30px]'>
                  <img className='object-contain w-full md:w-[250px] rounded-[3rem]' src={heroImg2} alt="Hero Image" />
                  <img src={heroImg3} alt="Hero Image" className='w-full md:w-[250px] object-contain rounded-3xl mb-[30px]' />
                </div>
                <div className='w-full lg:w-[530px] rounded-lg'>
                  <img src={heroImg1} alt="Hero Image" className='w-full h-[300px] rounded-3xl object-cover' />

                </div>
              </div>

            </div>
          </div>
        </section>
      </>
      {/* Hero Section Ends */}

      {/* Feature Section Starts  */}
      <section className="howItWorks__section  2xl:h-[800px]">
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>

            <h2 className='heading text-center'>Are you ready to take a trip?</h2>
            <p className='text__para text-center'>Worlds Leading Online Tour Booking</p>
            <div className='mx-auto flex justify-center items-center'>
              <button className="btn ">Contact Us</button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] place-items-center'>
            <div className='py-[30px] px-5 bg-yellowColor rounded-[20px] w-[200px] hover:opacity-[0.8] transition-all duration-500 cursor-pointer shadow-shadowOne'>
              <Link to='/destinations'>
                <div className='flex items-center justify-center'>
                  <GiWildfires className='w-[100px] h-[100px]' />
                </div>
                <div>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[900] text-center'>Wild Life</h2>
                </div>
              </Link>
            </div>
            <div className='py-[30px] px-5 rounded-[20px] bg-purpleColor w-[200px] hover:opacity-[0.8] transition-all duration-500 cursor-pointer shadow-shadowOne'>
              <Link to='/destinations'>
                <div className='flex items-center justify-center'>
                  <TbBeach className='w-[100px] h-[100px]' />
                </div>
                <div>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[900] text-center'>Beach Tour</h2>
                </div>
              </Link>
            </div>
            <div className='py-[30px] px-5 rounded-[20px] bg-irisBlueColor w-[200px] hover:opacity-[0.8] transition-all duration-500 cursor-pointer shadow-shadowOne'>
              <Link to='/destinations'>
                <div className='flex items-center justify-center'>
                  <GiMountainRoad className='w-[100px] h-[100px]' />
                </div>
                <div>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[900] text-center'>Adventures</h2>
                </div>
              </Link>
            </div>
            <div className='py-[30px] px-5 rounded-[20px] bg-red-500 w-[200px] hover:opacity-[0.8] transition-all duration-500 cursor-pointer shadow-shadowOne'>
              <Link to='/destinations'>
                <div className='flex items-center justify-center'>
                  <GiParachute className='w-[100px] h-[100px]' />
                </div>
                <div>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[900] text-center'>ParaGuilding</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section Ends  */}

      {/* About Component   */}
      <About />

      {/* Services Section Starts  */}
      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Best Services</h2>
            <p className='text__para text-center'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, harum. Lorem ipsum dolor sit amet.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* Services Section Ends  */}

      {/* Get a Booking Section Starts */}
      <section>
        <div className="container">
          <div className='flex items-center justify-between flex-col lg:flex-row'
          >
            {/* Content Section  */}
            <div className='xl:w-[670px]'>
              <h2 className='heading'>Get your Ticket Now!</h2>
              <ul className='pl-4'>
                <li className='text__para'>1. Ensure a user-friendly interface with intuitive navigation for easy booking</li>
                <li className='text__para'>2. Clearly state all costs and fees upfront to avoid any hidden charges.</li>
                <li className='text__para'>3. Provide a responsive customer support system to address inquiries promptly.</li>
                <li className='text__para'>4. Discounts, promotions, or loyalty programs to incentivize bookings.</li>
                <li className='text__para'>5. Secure Payment Options and ensuring a safe online Booking process.</li>
                <li className='text__para'>6. Your Trustworthy partner working in the industry for more than 10+ years.</li>
              </ul>
              <Link to='/'>
                <button className='btn'>Book a Ticket</button>
              </Link>
            </div>
            {/* Image Section  */}
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={bookingIcon} alt="Booking Image" className='md:h-[600px]'/>

              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-[7.25rem] z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] shadow-shadowOne'>
                
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[6px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[600]'>Sat, 23</p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>9:00 PM</p>
                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                    <BiSolidPhoneCall/>
                  </span>
                </div>
                <div className='w-[110px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                  Schedule a Call
                </div>

                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={avatarImg} alt="Avatar" className='w-[34px] h-[34px] rounded-full'/>
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>Robert Johnson</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get a Booking Section Ends */}

      {/* Destination Section Starts  */}
      <section>
        <div className="container">
        <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Top Destinations</h2>
            <p className='text__para text-center'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dignissimos. Lorem ipsum dolor sit amet.
            </p>
          </div>

          <DestinationList/>
        </div>
      </section>
      {/* Destination Section Ends  */}

    </>
  )
}

export default Home
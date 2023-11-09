import heroImg1 from '../assets/images/heroImg01.jpg'
import heroImg2 from '../assets/images/heroImg02.jpg'
import heroImg3 from '../assets/images/heroImg03.jpg'
const Home = () => {
  return (
    <>
      {/* Hero Section  */}
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
                  <img  src={heroImg3} alt="Hero Image" className='w-full md:w-[250px] object-contain rounded-3xl mb-[30px]'/>
                </div>
                <div className='w-full lg:w-[530px] rounded-lg'>
                <img  src={heroImg1} alt="Hero Image" className='w-full h-[300px] rounded-3xl object-cover'/>
                  
                </div>
          </div>    
              
            </div>
        </div>
        </section>
      </>
    </>
  )
}

export default Home
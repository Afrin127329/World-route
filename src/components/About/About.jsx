import { Link } from 'react-router-dom';
import AboutImg01 from '../../assets/images/aboutImg01.jpg';
import AboutImg02 from '../../assets/images/aboutImg02.jpg';
import AboutImg03 from '../../assets/images/aboutImg03.jpg';
const About = () => {
  return (
      <section>
          <div className="container">
              <div className="flex justify-between gap-[58px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                  {/* About Images  */}
                  <div className="relative w-full flex items-center justify-center lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <div className='h-[100vh]'>
                      <img src={AboutImg01} alt="About" className='w-[200px] border-black border-[10px] rotate-[20deg] rounded-md'/>
                      <img src={AboutImg02} alt="About" className='w-[300px] lg:w-[400px] rounded-md border-black border-[10px]'/>
                      <img src={AboutImg03} alt="About" className='w-[200px] border-black border-[10px] rotate-[20deg] absolute right-0 lg:right-[160px] rounded-md' />
                      </div>
                    </div>
                  {/* About Content  */}
                  <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                      <h2 className='heading'>Proud to be One of the top Companies!</h2>
                      <p className='text__para'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur asperiores facere perferendis? Optio necessitatibus mollitia pariatur odit quis omnis quo repellendus voluptatem rem minima, dolore id quae quas iure!
                      </p>

                      <p className='text__para my-[30px]'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sequi aliquid ipsam esse ipsa tempora. Quae sit qui id laborum, rerum fugiat itaque, accusamus dicta eaque earum ipsa sapiente asperiores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vitae molestias veritatis ad eveniet corporis eum reprehenderit ducimus sunt necessitatibus.
                      </p>
                          <Link to='/' className='btn'>Learn More</Link>
                </div>
              </div>
          </div>
    </section>
  )
}

export default About
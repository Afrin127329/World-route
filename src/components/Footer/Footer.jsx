import { AiFillGithub, AiOutlineCopyright, AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { TiWorld } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    path: 'https://github.com/Afrin127329',
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: 'https://twitter.com/AfrinNahar10',
    icon: <BsTwitter className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: 'https://www.instagram.com/afrin_nahar99/',
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: 'https://www.facebook.com/afrin4me',
    icon: <BsFacebook className='group-hover:text-white w-4 h-5'/>
  },

]

const quickLinks01 = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/',
    display: 'About Us'
  },
  {
    path: '/destinations',
    display:'Services'
  },
  {
    path: '/',
    display: 'Blog'
  },
]

const quickLinks02 = [
  {
    path: '/home',
    display: 'Find a Destination'
  },
  {
    path: '/destinations',
    display: 'Book a Hotel'
  },
  {
    path: '/destinations',
    display:'Find a Location'
  },
  {
    path: '/',
    display: 'Get an Opinion'
  },
]
const quickLinks03 = [
  {
    path: '/home',
    display: 'Visit us locally'
  },
  {
    path: '/destinations',
    display: 'Contact Us'
  }
]



const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <div className='flex items-center text-[24px] font-bold'><TiWorld className='text-primaryColor' /> World Route</div>
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4 flex flex-col md:flex-row gap-3 md:items-center'>Copyright <AiOutlineCopyright /> {year} developed by Afrin Nahar | All Rights Reserved</p>

            <div className='flex items-center gap-3 mt-8'>
              {socialLinks.map((link, index) => (
                <Link to={link.path} key={index} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:text-white transition-all duration-500 shadow-shadowtwo'>{link.icon}</Link>
            ))}

            </div>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-3 text-headingColor'>Quick Links</h2>

            <ul>
              {quickLinks01.map((item, index) => <li key={index} className='py-3'>
                <Link to={item.path} className='text-[16px] leading-7 font-[700] text-textColor hover:text-primaryColor transition-all duration-500'>{item.display}</Link>
              </li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-3 text-headingColor'>I want to: </h2>

            <ul>
              {quickLinks02.map((item, index) => <li key={index} className='py-3'>
                <Link to={item.path} className='text-[16px] leading-7 font-[700] text-textColor hover:text-primaryColor transition-all duration-500'>{item.display}</Link>
              </li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-3 text-headingColor'>Contacts</h2>

            <ul>
              {quickLinks03.map((item, index) => <li key={index} className='py-3'>
                <Link to={item.path} className='text-[16px] leading-7 font-[700] text-textColor hover:text-primaryColor transition-all duration-500'>{item.display}</Link>
              </li>)}
            </ul>
          </div>


        </div>
      </div>
    </footer>
  )
}

export default Footer
import right_arrow from '../../assets/right_arrow.png'

import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
      <section className='relative flex flex-col gap-10 container mx-auto'>
          
          <h1 className="text-primary pb-5">Pilot Your<br /> Business to<br /> Higher Altitudes.</h1>
          <p className="font-medium text-xl  pb-5">Have full control of your design process and budget while lifting your brand with expert <br /> local guidance and world-class designers, enhanced by cutting-edge AI technology.</p>
          
          <div className=''>
              <button className="bg-primary text-white p-8 rounded-xl flex gap-4 text-xl relative overflow-hidden h-[50px] w-[380px] text-center items-center cursor-pointer hover:bg-blue-700">
                  <Link to="/contact">
                    BOOK YOUR TICKET TODAY
                  </Link>
                  <img src={right_arrow} alt="" className='absolute top-[-10px] right-[-20px]'/>
              </button>
          </div>
    </section>
  )
}

export default HeroSection
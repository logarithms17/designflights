import right_arrow from '../../assets/right_arrow.png'

import { Link } from 'react-router-dom'

const WhyUs = () => {
  return (
      <section className="container mx-auto grid grid-cols-3 gap-24">
          <div className="flex flex-col gap-10">
              <p className="section-title">WHY DESIGN FLIGHTS?</p>
              <h2 className="text-primary">Scale Without Worries</h2>
          </div>
          <div className="col-span-2 flex flex-col gap-8">
              <p className="font-medium text-xl  pb-5">
                  Hiring a full-time designer can be risky. You’ve spent on equipment and have a monthly operational expense but what if there’s not enough workload to justify the cost? Or what if you need 2 to 3 more designers but only for a few months? The hiring process alone can cost you your time and budget, plus you need to train them too.
                  <br />
                  <br />
                  With DesignFlights, you don’t need to worry about any of those things. You can work with one or multiple designers from our team, from small to large scale marketing campaigns and events. Pay only for work you need and when you need it.
              </p>

              <div className=''>
              <button className="bg-primary text-white p-8 rounded-xl flex gap-4 text-xl relative overflow-hidden h-[60px] w-[450px] text-center items-center cursor-pointer hover:bg-blue-700">
                  <Link to="/contact">TAKE A BRAND DISCOVERY TEST</Link>
                  <img src={right_arrow} alt="" className='absolute top-[-10px] right-[-20px]'/>
              </button>
              </div>
          </div>
          
    </section>
  )
}

export default WhyUs
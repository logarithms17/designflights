// import layer1 from '../assets/layer_1.png'
// import layer2 from '../assets/layer_2.png'
import barcode from '../../assets/barcode.png'
import arrow_down from '../../assets/arrow_down.png'

import grit from '../../assets/grit.png'
import coffee from '../../assets/coffe.png'
import palm_harbor from '../../assets/palm_harbor.png'
import skin_care from '../../assets/skin_care.png'
import brickland from '../../assets/brickland.png'
import rja_express from '../../assets/rja_express.png'
import axl from '../../assets/axl.png'
import gordian_logo from '../../assets/gordian_logo.jpg'
import arrow_right from '../../assets/arrow_right2.png'

import { useState } from 'react'


const WorkSamples = () => {
  const [isSwiped, setIsSwiped] = useState(false)

  const toggleIsSwiped = () => {
    setIsSwiped(!isSwiped)
  }

  const translateX = isSwiped ? 0 : "-translate-x-[380px]"

    return (
      <>
      
      <section className="flex flex-col gap-10">
          <div className="container mx-auto flex flex-col gap-10">
            <p className="section-title ">Work Samples</p>
            <h2 className="text-primary">Brands we’ve helped take flight</h2>
          </div>

          <div className='container mx-auto flex flex-col gap-5 relative'>
            <div className=' flex overflow-x-hidden gap-5'>
              <img src={grit} alt="" className={`transition ease-in-out delay-150 ${translateX}`}/>
              <img src={coffee} alt="" className={`transition ease-in-out delay-150 ${translateX}`}/>
              <img src={palm_harbor} alt="" className={`transition ease-in-out delay-150 ${translateX}`}/>
              <img src={skin_care} alt="" className={`transition ease-in-out delay-150 w-[363px] h-[297px] rounded-xl ${translateX}`} />
            </div>

            <div className=' flex overflow-x-hidden gap-5'>
              <img src={brickland} alt="" className={`transition ease-in-out delay-150 ${translateX}`}/>
              <img src={rja_express} alt="" className={`transition ease-in-out delay-150 ${translateX}`}/>
              <img src={axl} alt="" className={`transition ease-in-out delay-150 ${translateX}`}/>
              <img src={gordian_logo} alt="" className={`transition ease-in-out delay-150 w-[363px] h-[297px] rounded-xl ${translateX}`} />
            </div>
            <button onClick={toggleIsSwiped}><img src={arrow_right} alt="" className='absolute top-[260px] right-[90px]'/></button>
            
          </div>
          
          

          <div className=" text-3xl font-medium text-white bg-primary h-[863px] relative">
              <div className="container mx-auto flex flex-col gap-10 py-32 leading-[66.6px]">
                <p>Ready to take your business to the next level but stuck with branding<br /> and marketing that don’t make the cut? Low-quality designs can make your<br /> company look small and unreliable, holding you back in a competitive market.
              </p>
              
              <p>You want professional visuals, but high costs can be a barrier. On the flip side,<br/> "affordable" designers often fall short, leaving you with disappointing results.</p>
               </div>

                <h2 className="text-white container mx-auto">What if there were<br /> a better way?</h2>
                <img src={barcode} alt="" className='absolute top-[0px] right-[100px]' />
                    <img src={arrow_down} alt="" className='absolute bottom-[0px] right-0' />
            {/* <div className='flex z-10'>
                  <img src={layer1} alt="" />
                  <img src={layer2} alt="" />
            </div> */}

          </div>
          
      </section>
      
            </>
  )
}

export default WorkSamples   
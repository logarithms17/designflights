import { Outlet } from "react-router-dom"

import MainNavigation from "../components/landingpage-components/MainNavigation"
import Footer from "../components/landingpage-components/Footer"

import car from '../assets/car.png'
import modern_lock from '../assets/modern_lock.png'
import polo from '../assets/polo_shirts.png'
import calling_card from '../assets/calling_card.png'
import logo from '../assets/modern_logo.png'


const SharedLayout = () => {
  return (
      <div className="">
      <MainNavigation />
      <div className="mx-auto"><Outlet /></div>
      <Footer />

      <div>
              <img src={car} alt="car" className='absolute top-[243px] right-[86px]'/>
              <img src={modern_lock} alt="modern_lock" className='absolute top-[228px] right-[542px]'/>
              <img src={polo} alt="polo_shirt" className='absolute top-[142px] right-0' />
              <img src={calling_card} alt="calling_card" className='absolute top-[515px] right-0'/>
              <img src={logo} alt="logo" className='absolute top-[165px] right-[399px]'/>
              
          </div>
          
      </div>
  )
}

export default SharedLayout
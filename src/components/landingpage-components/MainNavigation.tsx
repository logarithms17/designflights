import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
const MainNavigation = () => {
  return (
      <div className="grid grid-cols-2 gap-4 mb-[240px] py-10 container mx-auto">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="" />
        </Link>
      </div>
          <div className='justify-self-end flex gap-4 font-semibold text-xl'>
              <NavLink to="/" className={({isActive} : {isActive: boolean}) => isActive ? 'text-blue-700 underline underline-offset-4' : ''}>work</NavLink>
              {/* <NavLink to="/about" className={({isActive} : {isActive: boolean}) => isActive ? 'text-blue-700 underline underline-offset-4' : ''}>about</NavLink> */}
              <NavLink to="/contact" className={({isActive} : {isActive: boolean}) => isActive ? 'text-blue-700 underline underline-offset-4' : ''}>contact</NavLink>
          </div>
    </div>
  )
}

export default MainNavigation
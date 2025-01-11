import arrow_right from '../../assets/arrow_right.png'


import { useState } from 'react';

type ServicesListProps = {
    title: string;
    number: string;
    };

const ServicesList = ({title, number} : ServicesListProps) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
  return (
    <div className="pl-[367px]">
          <p className="number pb-2">{number}</p>
              <div className="flex justify-between pb-5">
                <h3 className='text-primary'>{title}</h3>
                <button onClick={toggleVisibility} className='text-primary font-bold text-3xl'>{isVisible ? "-" : "+"}</button>
              </div>
              <hr />
              {isVisible && (
                  <div className='flex flex-col gap-5 py-8'>
                      <p className="font-medium text-xl  pb-5">Create visual and strategic elements that effectively communicate your brand's message, attract your target audience, and enhance customer engagement, ultimately driving conversions and business growth.</p>
                      <ul className="grid grid-cols-2 w-[400px] gap-2">
                          <li className="flex gap-2">
                              <img src={arrow_right} alt="" className="w-6 h-6"/>
                              Flyers
                          </li>
                          <li className="flex gap-2">
                              <img src={arrow_right} alt="" className="w-6 h-6"/>
                              Brochures
                          </li>
                          <li className="flex gap-2">
                              <img src={arrow_right} alt="" className="w-6 h-6"/>
                              Posters
                          </li>
                          <li className="flex gap-2">
                              <img src={arrow_right} alt="" className="w-6 h-6"/>
                              Social Media Posts
                          </li>
                          <li className="flex gap-2">
                              <img src={arrow_right} alt="" className="w-6 h-6"/>
                              Postscards
                          </li>
                          <li className="flex gap-2">
                              <img src={arrow_right} alt="" className="w-6 h-6"/>
                              Social Media Ads
                          </li>
                      </ul>
                  </div>
                  
                  
              )}
          </div>
  )
}

export default ServicesList
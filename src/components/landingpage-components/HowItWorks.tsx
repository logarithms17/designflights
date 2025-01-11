import map from '../../assets/map.png'
import right_arrow from '../../assets/right_arrow.png'

import { Link } from 'react-router-dom'


const HowItWorks = () => {

    const workList = [
        {
            id: 1,
            number: "01",
            title: "Consultation",
            description: "We discuss on your design requirements and how often you'll need our services. "
        },
        {
            id: 2,
            number: "02",
            title: "Allocation",
            description: "Based on this, we will recommend a suitable block of time. "
        },
        {
            id: 3,
            number: "03",
            title: "Updates",
            description: "You'll receive detailed time reports as you approach your block limit. "
        },
        {
            id: 4,
            number: "04",
            title: "Add-Ons",
            description: "Purchase additional block times as needed."
        },
    ]
    return (
        <>
            <div className="bg-[#F5FAFF]  h-[471px] ">
                <section className="container mx-auto flex flex-col gap-10 py-20 relative">
                                    <img src={map} alt="" className='absolute top-0 right-[300px]'/>
                    <h3 className="text-primary text-center">Here's how it works:</h3>
                    <ul className="grid grid-cols-4 gap-10">
                        {workList.map((item) => (
                            <li key={item.id} className="flex gap-5 flex-col">
                                <p className="number">{item.number}</p>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-primary">{item.title}</h4>
                                    <hr className="border-2 border-[#071C99]"/>
                                    <p className="font-medium text-xl">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </section>
                
            </div>

            <section className='container mx-auto'>
                <div className='w-[824px] text-center mx-auto flex flex-col gap-5 justify-center items-center'>
                    <h3 className="text-primary text-center">Your brand deserves to stand out.</h3>
                    <p className="text-primary pb-5 text-center ">Let us help you craft a visual identity that commands attention and converts leads. Get started with DesignFlights today and see the difference professional design can make.</p>
                    <div className=''>
                    <button className="bg-primary text-white p-8 rounded-xl flex gap-4 text-xl relative overflow-hidden h-[50px] w-[380px] text-center items-center cursor-pointer hover:bg-blue-700">
                        <Link to="/contact">BOOK YOUR TICKET TODAY</Link>
                        <img src={right_arrow} alt="" className='absolute top-[-10px] right-[-20px]'/>
                    </button>
          </div>
                </div>
                
            </section>
        </>
        
      
  )
}

export default HowItWorks
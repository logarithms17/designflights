import barcode_02 from '../../assets/barcode-02.png'
import logo_footer from '../../assets/logo_footer.png'

const Footer = () => {

    const footerData = [
        {
            id: 1,
            title: "Socials",
            links: ["Facebook", "Instagram", "Linkedin"]
        },
        {
            id: 2,
            title: "Services",
            links: ["Marketing", "Branding" , "Web"]
        },
        {
            id: 3,
            title: "Contact",
            links: ["Marketing", "Branding" , "Web"]
        }
    ]
    return (
      <div className="bg-primary  mt-20">
            <section className="container mx-auto relative h-[515px]">
                <div className="grid grid-cols-2 gap-20 pt-20">
                    <div className='flex flex-col gap-5'>
                        <p className="text-white text-xl font-normal font-sans">©DesignFlights 2024. All Rights Reserved</p>
                        <img src={barcode_02} alt="" className='w-[178px]'/>
                    </div>
                    <ul className='grid grid-cols-3 gap-10'>
                        {footerData.map((item) => (
                            <li className="" key={item.id}>
                            <p className='text-white font-bold text-xl pb-4'>{item.title}</p>
                            <ul className='flex flex-col gap-3'>
                                {item.links.map((link, index) => (
                                <li className="text-white text-xl font-light font-sans" key={index}>
                                    {link}
                                </li>
                                ))}
                            </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <img src={logo_footer} alt=""  className='absolute bottom-0'/>
            </section>
      </div>
    
  )
}

export default Footer
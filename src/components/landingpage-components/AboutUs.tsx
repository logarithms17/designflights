import settings from '../../assets/fi_16232204.svg'
import pin from '../../assets/fi_450016.svg'
import pie from '../../assets/fi_4719392.svg'
import globe from '../../assets/fi_9834654.svg'

const AboutUs = () => {
  return (
      <section className="container mx-auto">
          <p className="section-title">ABOUT US</p>
          <h2 className="text-primary">Meet DesignFlights.</h2>
          <div className="grid grid-cols-4 gap-20 pt-20">
              <div className='flex flex-col gap-5'>
                  <img src={settings} alt="" className='text-white p-2 border-4 border-[#071C99] rounded-xl w-20 h-20' />
                  <h3 className='text-primary'>Customizable Projects</h3>
                  <hr />
                  <p className='font-medium text-xl  pb-5'>Choose the services that best fit your needs, from specific inclusions to full design packages. You’re in control!</p>
              </div>
              <div className='flex flex-col gap-5'>
                  <img src={pie} alt="" className='text-white p-2 border-4 border-[#071C99] rounded-xl w-20 h-20' />
                  <h3 className="text-primary">Tailored<br /> Budget</h3>
                  <hr />
                  <p className='font-medium text-xl  pb-5'>Manage your budget effectively by paying only for the work you require. Customize the project scope to fit your financial goals.</p>
              </div>
              <div className='flex flex-col gap-5'>
                  <img src={globe} alt="" className='text-white p-2 border-4 border-[#071C99] rounded-xl w-20 h-20' />
                  <h3 className="text-primary">World-Class Designs</h3>
                  <hr />
                  <p className='font-medium text-xl  pb-5'>Benefit from the expertise of veteran branding and marketing specialists with over a decade of experience working with global brands.</p>
              </div>
              <div className='flex flex-col gap-5'>
                  <img src={pin} alt="" className='text-white p-2 border-4 border-[#071C99] rounded-xl w-20 h-20' />
                  <h3 className="text-primary">Localized Service</h3>
                  <hr />
                  <p className='font-medium text-xl  pb-5'>Our Australia-based team provides real-time support and understands the unique needs of local businesses, ensuring you’re in capable hands.</p>
              </div>
          </div>
    </section>
  )
}

export default AboutUs
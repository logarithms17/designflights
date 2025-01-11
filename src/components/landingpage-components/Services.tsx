import ServicesList from "./ServicesList"
import ceb_mel from '../../assets/ceb-mel.png'



const Services = () => {

  return (
    <div className="relative">
      <section className="container mx-auto">
          <p className="section-title">SERVICES</p>
          <h2 className="text-primary pb-20">How may we help you?</h2>
          <div className="flex flex-col gap-10">
                <ServicesList title="Marketing Designs" number="01"/>
                <ServicesList title="Branding" number="02"/>
                <ServicesList title="Web Design" number="03"/>
          </div>
          
          <img src={ceb_mel} alt="" className="absolute top-[95px] left-0"/>
    </section>
    </div>
      
  )
}

export default Services
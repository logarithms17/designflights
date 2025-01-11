import HeroSection from "../components/landingpage-components/HeroSection"
import WorkSamples from "../components/landingpage-components/WorkSamples"
import AboutUs from "../components/landingpage-components/AboutUs"
import Services from "../components/landingpage-components/Services"
import WhyUs from "../components/landingpage-components/WhyUs"
import InFlightOffers from "../components/landingpage-components/InFlightOffers"
import HowItWorks from "../components/landingpage-components/HowItWorks"

const LandingPage = () => {
    return (
        <div className="flex flex-col gap-[130px]">
            <HeroSection />
            <WorkSamples />
            <AboutUs />
            <Services />
            <WhyUs />
            <InFlightOffers />
            <HowItWorks />
        </div>
    
  )
}

export default LandingPage
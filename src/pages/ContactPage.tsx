import About from "../components/contactpage/About"
import Header from "../components/contactpage/Header"
import ProjectDetails from "../components/contactpage/ProjectDetails"

const ContactPage = () => {
  return (
      <section className="container mx-auto flex flex-col gap-[130px]">
          <Header />
          <About />
          <ProjectDetails />
    </section>
  )
}

export default ContactPage
import Input from "./Input"

const About = () => {
  return (
    <section className="flex flex-col gap-16">
      <div>
          <p className="section-title">WHAT IS IT ABOUT?</p>
          <h2 className='text-primary'>Project Overview</h2>
      </div>
          
          
          <form action="" className='grid grid-cols-2 gap-12'>
              <Input label="Name of Project" name="name" id="name" value="Website Redesign" />
              <Input label="For what brand or company is this for?" name="brand" id="brand" value="ABC Clothing Co." />
              <Input label="Project Point Person" name="point-person" id="point-person" value="John Doe" />
              <Input label="Email Address" name="email" id="email" value="johndoe@example.com" />
              <Input label="Deadline" name="deadline" id="deadline" value="April 1, 2025" />

              <Input label="Objective" name="objective" id="objective" value="Improve Design to Boost Conversions" />
              
          </form>

    </section>
  )
}

export default About
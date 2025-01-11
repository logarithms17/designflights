

const ProjectDetails = () => {
  return (
      <section className="">
          <p className="section-title">WHAT ARE WE WORKING ON?</p>
          <h2 className="text-primary">Project Details</h2>

          <div className="grid grid-cols-2 gap-10 h-[900px]">
              <div>
                  <select name="" id="" className="w-full p-5 font-medium text-xl bg-[#F5FAFF] rounded-lg">
                      <option value="">Type of Project</option>
                      <option value="Single Sided Flyer">Single Sided Flyer</option>
                      <option value="Double Sided Flyer">Double Sided Flyer</option>
                      <option value="Trifold Brochure">Trifold Brochure</option>
                      <option value="Multi-Page Brochre">Multi-Page Brochre</option>
                      <option value="Mailer">Mailer</option>
                      <option value="Banner">Banner</option>
                      <option value="Poster">Poster</option>
                      <option value="Menu">Menu</option>
                      <option value="Social Media Posts">Social Media Posts</option>
                      <option value="Web Ad">Web Ad</option>
                      <option value="Email Design">Email Design</option>
                      <option value="Landing Page Design">Landing Page Design</option>
                      <option value="eBook Layout">eBook Layout</option>
                      <option value="Other">Other</option>
                      
                  </select>
              </div>

              <div className="flex flex-col gap-10 font-medium text-xl"> 
                  <div className="flex flex-col gap-5  bg-[#F5FAFF] p-5 rounded-lg">
                      <p >Additional Details</p>
                      <p className="text-[#C1C5EF]">(Eg. How many pages would this be if you've selected a multi-page brochure?)</p>
                  </div>
                  <div className="bg-[#F5FAFF] p-5 rounded-lg">
                      <p>File Format and Size Requirements</p>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default ProjectDetails
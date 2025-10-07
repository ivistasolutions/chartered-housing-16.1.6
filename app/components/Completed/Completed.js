import { completedProject } from '@/app/utils/completedProjects'

const Completed = () => {
  return (
    <div className="mb-10 lg:px-0 px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {completedProject.map((project, i) => (
          <div key={i} className="border border-[#ED1C25] p-4 space-y-3">
            <h4 className="text-4xl font-playfair text-[#ED1C25] ">
              {project.year}
            </h4>
            <div>
              <h6 className="text-xl text-[#646464] font-bold">
                {project.project}
              </h6>
              <h6 className="text-lg text-[#646464]">{project.location}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Completed

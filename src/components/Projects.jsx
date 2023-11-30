import data from "../assets/data";
import Display_Project from "./Display_Project";

const Projects = () => {
  return (
    <div className="lg:pb-10 lg:pt-4 py-6 px-4 dark:bg-slate-800 dark:text-white font-poppins lg:font-bold font-semibold flex flex-col items-center">
      <div className="font-poppins font-bold text-3xl py-10">Project Work</div>
      <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 grid lg:w-[65%] sm:lg:w-[85%] mx-auto gap-10">
        {data.map((solo, ind) => (
          <Display_Project key={ind} {...solo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

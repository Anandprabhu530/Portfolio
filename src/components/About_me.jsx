import temp3 from "../assets/Profile.png";
const About_me = () => {
  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <div className="flex flex-col justify-center items-center">
        <img
          src={temp3}
          alt="person-logo"
          className="rounded-full scale-[0.50] "
        />
        <div className="font-poppins font-bold pb-3 text-xl">
          Hi, I’m Anand Prabhu
        </div>
        <div className="text-7xl font-semibold pb-2 flex">
          <div className="custom-underline">Building&nbsp;</div>
          <div>the future</div>
        </div>
        <div className="text-7xl font-semibold pb-2">One line of</div>
        <div className="text-7xl font-semibold">Code at a time.</div>
        <div className="mt-5 text-xl">
          Enthusiastically navigating the path to full-stack mastery,
        </div>
        <div className="mt-1 text-xl">
          expanding my skillset with every step.
        </div>
      </div>
    </div>
  );
};

export default About_me;

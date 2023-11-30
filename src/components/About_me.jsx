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
        <div className="font-poppins font-bold pb-3 lg:text-xl">
          Hi, I’m Anand Prabhu
        </div>
        <div className="lg:text-7xl text-4xl font-semibold lg:pb-2 flex">
          <div className="custom-underline">Building&nbsp;</div>
          <div>the future</div>
        </div>
        <div className="lg:text-7xl text-4xl font-semibold lg:pb-2">
          One line of
        </div>
        <div className="lg:text-7xl text-4xl font-semibold">
          Code at a time.
        </div>
      </div>
      <div className="flex justify-center text-xl mx-2 lg:flex-col lg:items-center lg:text-3xl mt-8 ">
        <div>
          In my unwavering quest for full-stack mastery, I am constantly
          expanding my horizons
          <span className="lg:hidden">
            &nbsp;fueled by insatiable curiosity and relentless pursuit.
          </span>
        </div>
        <div className="hidden lg:block">
          fueled by insatiable curiosity and relentless pursuit.
        </div>
      </div>
    </div>
  );
};

export default About_me;

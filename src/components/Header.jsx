import { useEffect, useState } from "react";

const Header = () => {
  const [darkmode, setdarkmode] = useState(false);

  useEffect(() => {
    if (darkmode) document.documentElement.classList.add("dark");
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <div className="flex justify-between p-5">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <a
            className="font-poppins font-medium navbar"
            href="mailto:recipient@example.com"
          >
            Contact Me
          </a>
        </div>
        <nav className="flex gap-10 justify-end pr-2 font-poppins font-medium">
          <a
            href="https://drive.google.com/file/d/1R8D-BHLIcAR9hLeVPtT7Me-Pu3EibzZE/view?usp=sharing"
            className="navbar"
          >
            Resume
          </a>
          <button
            onClick={() => {
              setdarkmode(!darkmode);
            }}
            className="navbar"
          >
            {darkmode ? "Light" : "Dark"} mode
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;

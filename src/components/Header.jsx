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
    <div className="font-poppins lg:font-semibold dark:bg-slate-800 dark:text-white">
      <div className="flex justify-between pt-5">
        <div className="flex lg:gap-4 gap-2 ml-3 lg:ml-4">
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
          <a href="mailto:anandprabhu530gmail.com">Contact Me</a>
        </div>
        <div className="flex lg:gap-8 gap-5 lg:pr-6 pr-4 pb-5">
          <a
            href="https://drive.google.com/file/d/1KuDp8_5hrbQz9WuHuHPLKJXzEQJy4rbh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:navbar"
          >
            Resume
          </a>
          <button onClick={() => setdarkmode(!darkmode)} className="lg:navbar">
            Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

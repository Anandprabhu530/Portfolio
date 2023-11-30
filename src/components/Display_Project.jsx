/* eslint-disable react/prop-types */

const Display_Project = (props) => {
  return (
    <div className="font-poppins dark:text-white dark:bg-slate-800 ">
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col lg:gap-6 gap-4 border-2 border-black rounded-lg dark:border-red-50 lg:py-7 p-4"
      >
        <div className="font-poppins font-bold text-xl">{props.title}</div>
        <div className="font-medium">{props.description}</div>
        <div className="font-normal ">Developed With:</div>
        <div className="flex">
          {props.java ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
                className="dark:invert"
              >
                <path d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"></path>
              </svg>
            </div>
          ) : (
            <div className="flex lg:gap-4 gap-2">
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                className="dark:invert-0"
              >
                <path
                  d="M14.5 7.584c0 1.657-3.134 3-7 3s-7-1.343-7-3 3.134-3 7-3 7 1.343 7 3z"
                  stroke="currentColor"
                ></path>
                <path
                  d="M4.166 13.739c1.457.79 4.13-1.327 5.972-4.726 1.841-3.4 2.153-6.795.696-7.584-1.457-.79-4.13 1.327-5.972 4.726-1.841 3.4-2.153 6.795-.696 7.584z"
                  stroke="currentColor"
                ></path>
                <path
                  d="M10.834 13.739c-1.457.79-4.13-1.327-5.972-4.726-1.841-3.4-2.153-6.795-.696-7.584 1.457-.79 4.13 1.327 5.972 4.726 1.841 3.4 2.153 6.795.696 7.584z"
                  stroke="currentColor"
                ></path>
                <path
                  d="M6.5 7.584a1 1 0 102 0 1 1 0 00-2 0z"
                  stroke="currentColor"
                ></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
              >
                <path
                  d="M7.5 3C5.633 3 4.467 4 4 6c.7-1 1.517-1.375 2.45-1.125.533.143.913.557 1.334 1.015C8.471 6.636 9.265 7.5 11 7.5c1.867 0 3.033-1 3.5-3-.7 1-1.517 1.375-2.45 1.125-.533-.143-.913-.557-1.334-1.015C10.029 3.864 9.235 3 7.5 3zM4 7.5c-1.867 0-3.033 1-3.5 3 .7-1 1.517-1.375 2.45-1.125.533.143.913.557 1.334 1.015C4.971 11.136 5.765 12 7.5 12c1.867 0 3.033-1 3.5-3-.7 1-1.517 1.375-2.45 1.125-.533-.143-.913-.557-1.334-1.015C6.529 8.364 5.735 7.5 4 7.5z"
                  stroke="currentColor"
                ></path>
              </svg>
              {props.firebase ? (
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                >
                  <path
                    d="M2.5 11.5l9-8 1 9-5 2-5-3zm0 0l5-9 2 3m-7 6l1-11 3 3"
                    stroke="currentColor"
                  ></path>
                </svg>
              ) : props.mongodb ? (
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                >
                  <path
                    d="M7.5.5l.369-.338a.5.5 0 00-.738 0L7.5.5zm0 13l-.393.309a.5.5 0 00.786 0L7.5 13.5zM4.623 9.838l-.393.31.393-.31zm.246-6.467L4.5 3.032l.369.337zm5.262 0l.369-.338-.369.337zm.246 6.467l.393.31-.393-.31zM8 15V.5H7V15h1zm-.107-1.809L5.016 9.53l-.786.618 2.877 3.662.786-.618zM5.237 3.708L7.87.838 7.13.162 4.5 3.032l.736.676zM7.131.838l2.632 2.87.737-.675L7.869.163 7.13.837zm2.853 8.691l-2.877 3.662.786.618 2.877-3.662-.786-.618zm-.221-5.82a4.5 4.5 0 01.22 5.82l.787.618a5.5 5.5 0 00-.27-7.114l-.737.675zm-4.747 5.82a4.5 4.5 0 01.221-5.82L4.5 3.032a5.5 5.5 0 00-.27 7.114l.786-.618z"
                    fill="currentColor"
                  ></path>
                </svg>
              ) : props.express ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  className="dark:invert"
                >
                  <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
                </svg>
              ) : null}
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default Display_Project;

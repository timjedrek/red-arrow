import { useState } from "react";

const StudentNavbar = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMobile(() => !openMobile);
  };

  return (
    <nav className="w-full shadow-md">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="lg:h-28 relative flex h-20 items-center justify-between"
            id="navbar"
          >
            <div className="flex flex-1 items-center justify-between">
              <a href="/" className="flex flex-shrink-0 items-center">
                <img
                  src="/red-arrow-logo.webp"
                  alt="Red Arrow Logo"
                  className="lg:h-20 h-14 w-auto"
                  id="navbar-image"
                />
              </a>
              <div className="hidden lg:ml-6 lg:block">
                <div
                  id="desktop-navbar"
                  className="flex gap-5 xl:gap-10 items-center"
                >
                  {/* Nav Items */}
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              <button
                type="button"
                className="mobile-menu-button relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleHamburgerClick}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="x-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="hamburger-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${openMobile ? "max-h-[36rem]" : "max-h-0"} overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden absolute w-full bg-white z-10`}
        id="mobile-menu"
      >
        <div id="mobile-navbar" className="px-4 pb-3 pt-2 flex flex-col">
          {/* Nav Items */}
        </div>
      </div>
    </nav>
  );
};

export default StudentNavbar;

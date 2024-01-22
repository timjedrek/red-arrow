import MobileNavBar from "./MobileNavBar";
import NavLink from "./NavLink";
import { flightPrograms, resources, about } from "../consts.ts";
import { useState } from "react";

const Navbar = ({ pathname }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(() => !open);
  };

  return (
    <nav class="relative">
      <div class="bg-black">
        <div class="mx-auto max-w-7xl px-4">
          <div class="relative flex h-20 lg:h-28 items-center justify-between">
            <div class="flex flex-1 items-center justify-between">
              <a href="/" class="flex flex-shrink-0 items-center">
                <img
                  src="/red-arrow-logo.webp"
                  alt="Red Arrow Logo"
                  class="h-14 lg:h-20 w-auto"
                />
              </a>
              <div class="hidden lg:ml-6 lg:block">
                <div class="flex gap-5 xl:gap-10 items-center">
                  <NavLink object={flightPrograms} />
                  <NavLink object={resources} />
                  <NavLink object={about} />
                  <div>
                    <a
                      href="/discovery-flight"
                      class="discovery nav-link cursor-pointer text-xl text-white py-5 hover:border-b-2 border-main-red whitespace-nowrap"
                    >
                      Discovery Flight
                    </a>
                  </div>
                  <button class="btn-red">BOOK NOW</button>
                </div>
              </div>
            </div>

            <div class="absolute inset-y-0 right-0 flex items-center lg:hidden">
              <button
                type="button"
                class="mobile-menu-button relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleClick}
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="x-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="hamburger-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class={`${open ? "max-h-[36rem]" : "max-h-0"} overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden absolute w-full bg-black -z-10`}
        id="mobile-menu"
      >
        <div class="px-4 pb-3 pt-2 flex flex-col">
          <MobileNavBar pathname={pathname} />
          <a
            href="/discovery-flight"
            class="discovery nav-link cursor-pointer text-xl text-white py-5 hover:border-b-2 border-main-red whitespace-nowrap"
          >
            Discovery Flight
          </a>
          <button class="btn-red place-self-center">BOOK NOW</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

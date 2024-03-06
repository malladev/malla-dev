import React, { useState } from "react";
import Layout from "./Layout";

export const navlinks = [
  { id: 1, name: "A propos de moi", href: "#about" },
  { id: 2, name: "Mes compétences", href: "#skills" },
  { id: 3, name: "Mes projets", href: "#project" },
  { id: 4, name: "Contacts", href: "#contact" },
];
function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <Layout>
      {/* Destop navbar */}
      <div className="hidden relative w-full p-4 gap-5 lg:flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-10 object-cover"
            src="https://media.licdn.com/dms/image/D4E03AQGMXtZcr36BUQ/profile-displayphoto-shrink_400_400/0/1692014566546?e=1715212800&v=beta&t=ss-VGeqzzTOvHbBPqprk8whJV2stL2XFiNGiMTolz0M"
            alt="Profil Photo"
          />
          <span className="leading-4 font-semibold bg-gradient-to-r from-indigo-300 to-gray-200 inline-block text-transparent bg-clip-text">
            Malla <br />
            DEV{" "}
          </span>
        </div>
        <div className="flex items-center lg:gap-x-16 md:gap-x-10">
          {navlinks.map((nav) => (
            <a
              key={nav.id}
              href={nav.href}
              className="text-gray-300 font-medium hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500 transition-all duration-300 hover:scale-105"
            >
              {nav.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <img
            className="w-7 bg-gray-200 p-1 rounded object-cover transition-all duration-300 hover:scale-105 hover:cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
            alt="FR"
          />
          <span className="text-gray-500">|</span>
          <img
            className="w-7 bg-gray-200 p-1 rounded object-cover transition-all duration-300 hover:scale-105 hover:cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Flag_of_the_United_States_%281795%E2%80%931818%29.svg/200px-Flag_of_the_United_States_%281795%E2%80%931818%29.svg.png"
            alt="EN"
          />
        </div>
      </div>

      {/* Mobile and ipad navbar */}
      <div className="lg:hidden relative p-2">
        <div className="flex items-center gap-5 justify-between">
          <div className="flex items-center gap-2">
            <img
              className="rounded-full w-10 object-cover"
              src="https://media.licdn.com/dms/image/D4E03AQGMXtZcr36BUQ/profile-displayphoto-shrink_400_400/0/1692014566546?e=1715212800&v=beta&t=ss-VGeqzzTOvHbBPqprk8whJV2stL2XFiNGiMTolz0M"
              alt="Profil Photo"
            />
            <span className="leading-4 font-semibold bg-gradient-to-r from-green-200 to-gray-400 inline-block text-transparent bg-clip-text">
              Malla <br />
              DEV{" "}
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            onClick={() => setMobileMenu(true)}
          >
            <path
              fill="currentColor"
              className="text-gray-200"
              d="M4 18h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h8c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m17.3 7.88L17.42 12l2.88-2.88a.996.996 0 1 0-1.41-1.41L15.3 11.3a.996.996 0 0 0 0 1.41l3.59 3.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42"
            ></path>
          </svg>
        </div>
      </div>
      {mobileMenu && (
          <div className="bg-gray-900 md:hidden flex flex-col absolute inset-0 z-50 p-4 w-full h-full">
            {/* Close menu button */}
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <path
                  fill="currentColor"
                  className="text-gray-200"
                  d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41L9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12L7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41"
                ></path>
              </svg>
            </div>
            {/* END */}

            <div className="flex flex-col items-center gap-5 justify-center">
              {/* User */}
              <div className="flex w-full px-10 flex-col mt-5 items-center gap-2">
                <img
                  className="rounded-full w-20 object-cover"
                  src="https://media.licdn.com/dms/image/D4E03AQGMXtZcr36BUQ/profile-displayphoto-shrink_400_400/0/1692014566546?e=1715212800&v=beta&t=ss-VGeqzzTOvHbBPqprk8whJV2stL2XFiNGiMTolz0M"
                  alt="Profil Photo"
                />
                <span className="leading-4 mt-1 text-2xl font-semibold bg-gradient-to-r from-green-200 to-gray-400 inline-block text-transparent bg-clip-text">
                  Malla DEV{" "}
                </span>
                <hr className="border-gray-500 w-full my-2" />
              </div>
              <div className="flex flex-col items-center font-medium justify-center gap-y-10 text-gray-200 text-base">
                {navlinks.map((nav) => (
                  <a key={nav.id} href={nav.href}>
                    {nav.name}
                  </a>
                ))}
                <div className="flex items-center gap-3">
                  <img
                    className="w-7 bg-gray-200 p-1 rounded object-cover transition-all duration-300 hover:scale-105 hover:cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
                    alt="FR"
                  />
                  <span className="text-gray-500">|</span>
                  <img
                    className="w-7 bg-gray-200 p-1 rounded object-cover transition-all duration-300 hover:scale-105 hover:cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Flag_of_the_United_States_%281795%E2%80%931818%29.svg/200px-Flag_of_the_United_States_%281795%E2%80%931818%29.svg.png"
                    alt="EN"
                  />
                </div>
              </div>
            </div>
          </div>
      )}
    </Layout>
  );
}

export default Navbar;

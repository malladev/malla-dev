import React, { useEffect, useState } from "react";

export const navlinks = [
  { id: 1, name: "About me", href: "#about" },
  { id: 2, name: "Technologies", href: "#tech" },
  { id: 3, name: "Services", href: "#service" },
  { id: 4, name: "Projects", href: "#project" },
  { id: 5, name: "Contacts", href: "#contact" },
];
function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const sectionActive = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveMenu(id);
          }
        });
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll(
      "about",
      "tech",
      "contact",
      "project",
      "service"
    );

    sections.forEach((section) => {
      sectionActive.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        sectionActive.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (mobileMenu) {
      document.body.classList.add("no-scroll");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = originalStyle;
    }

    // Nettoyage : s'exécute lorsque le composant est démonté ou avant que l'effet se réexécute
    return () => {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = originalStyle;
    };
  }, [mobileMenu]);

  return (
    <div className="w-full mx-auto max-w-5xl">
      {/* Destop navbar */}
      <div className="hidden relative  w-full p-4 gap-5 lg:flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 cursor-pointer hover:duration-500 hover:transition-transform hover:scale-110"
        >
          <img
            className="rounded-full w-10 object-cover"
            src="https://media.licdn.com/dms/image/D4E03AQGMXtZcr36BUQ/profile-displayphoto-shrink_400_400/0/1692014566546?e=1715212800&v=beta&t=ss-VGeqzzTOvHbBPqprk8whJV2stL2XFiNGiMTolz0M"
            alt="Profil Photo"
          />
          <span className="leading-4 font-semibold bg-gradient-to-r from-indigo-300 to-gray-200 inline-block text-transparent bg-clip-text">
            Malla <br />
            DEV{" "}
          </span>
        </a>
        <div className="flex items-center lg:gap-x-16 md:gap-x-10">
          {navlinks.map((nav) => (
            <a
              key={nav.id}
              href={nav.href}
              onClick={(e) => {
                e.preventDefault(); // Empêche le comportement par défaut du lien
                setActiveMenu(nav.href);
                document.getElementById(nav.href.substring(1)).scrollIntoView({
                  behavior: "smooth", // Active l'animation de défilement
                });
              }}
              className={`${
                activeMenu === nav.href &&
                "border-b-2 border-b-indigo-500 text-indigo-500"
              } text-gray-300 font-medium hover:border-b-2 hover:border-b-indigo-500 hover:text-indigo-500 transition-all duration-300 hover:scale-105`}
            >
              {nav.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile and ipad navbar */}
      <div className="lg:hidden z-[999] p-3.5">
        <div className="flex items-center gap-5 justify-between">
          <div className="flex items-center gap-2">
            <img
              className="rounded-full w-10 object-cover"
              src="https://media.licdn.com/dms/image/D4E03AQGMXtZcr36BUQ/profile-displayphoto-shrink_400_400/0/1692014566546?e=1715212800&v=beta&t=ss-VGeqzzTOvHbBPqprk8whJV2stL2XFiNGiMTolz0M"
              alt="Profil Photo"
            />
            <span className="leading-4 font-semibold bg-gradient-to-r from-indigo-200 to-gray-400 inline-block text-transparent bg-clip-text">
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
            className="cursor-pointer"
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
        <div className="h-full min-h-full z-50 bg-gray-900 absolute inset-0 p-5">
          <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          {/* Close menu button */}
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              onClick={() => setMobileMenu(!mobileMenu)}
              className="cursor-pointer"
            >
              <path
                fill="currentColor"
                className="text-gray-200"
                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41L9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12L7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41"
              ></path>
            </svg>
          </div>
          {/* END */}

          <div className="flex flex-col items-center gap-5 justify-center overflow-y-auto">
            {/* User */}
            <div className="flex w-full px-10 flex-col mt-5 items-center gap-2">
              <img
                className="rounded-full w-20 object-cover"
                src="https://media.licdn.com/dms/image/D4E03AQGMXtZcr36BUQ/profile-displayphoto-shrink_400_400/0/1692014566546?e=1715212800&v=beta&t=ss-VGeqzzTOvHbBPqprk8whJV2stL2XFiNGiMTolz0M"
                alt="Profil Photo"
              />
              <span className="leading-4 mt-1 text-2xl font-semibold bg-gradient-to-r from-indigo-200 to-gray-400 inline-block text-transparent bg-clip-text">
                Malla DEV{" "}
              </span>
              <hr className="border-gray-500 w-full my-2 md:mt-10" />
            </div>
            <div className="flex flex-col items-center font-medium justify-center md:gap-y-24 sm:gap-y-20 gap-y-14 overflow-y-auto text-gray-200 text-base">
              {navlinks.map((nav) => (
                <a
                  key={nav.id}
                  href={nav.href}
                  onClick={(e) => {
                    e.preventDefault(); // Empêche le comportement par défaut du lien
                    setActiveMenu(nav.href);
                    document
                      .getElementById(nav.href.substring(1))
                      .scrollIntoView({
                        behavior: "smooth", // Active l'animation de défilement
                      });
                  }}
                >
                  {nav.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

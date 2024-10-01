import React, { memo, useCallback } from "react";

// Optimized component for rendering project techs
const TechBadge = memo(({ tech }) => (
  <div className={`${tech.color} text-xs py-1 font-medium px-4`}>{tech.name}</div>
));

// Component for rendering project information
const ProjectCard = memo(({ project }) => (
  <figure className="rounded-2xl lg:mt-10 bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 relative group">
    <div className="overflow-hidden">
      <img
        src={project.photo}
        alt={project.alt}
        loading="lazy"
        className="w-full h-full object-cover group-hover:blur-sm transition duration-300"
      />
      <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white flex flex-col items-center justify-center gap-5 text-center px-4">
          <span className="text-xl font-semibold">{project.title}</span>
          <span>{project.body}</span>
          {
            project.type === "figma" &&
            <a
              href={project.href} target="_blank" rel="noreferrer"
              className="text-sm font-semibold bg-indigo-500 text-white px-4 py-2 w-fit rounded-full hover:bg-indigo-600"
            >
              view
            </a>
          }
        </p>
      </div>
    </div>
    <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
      <div className="flex-auto flex flex-wrap items-center gap-2">
        {project.techs.map((tech, idx) => (
          <TechBadge key={idx} tech={tech} />
        ))}
      </div>
    </figcaption>
  </figure>
));

const firstProject = {
  body: "The TONBA application aims to simplify management of tontines for managers by offering an intuitive interface, rigorous payment tracking and automated notifications.",
  photo: "./assets/Presentation TONBA.webp",
  alt: "Presentation maquette TONBA",
  type: "figma",
  title: "TONBA",
  href: "https://www.figma.com/design/t8nBvX1Cbdv8CiADXTNBmh/Tonba-Project?node-id=49-219&t=taAnE1XmTWWmtXaS-1",
  techs: [
    { id: 1, name: ["Figma"], color: "bg-blue-400 text-white" },
    { id: 3, name: ["React Native"], color: "bg-blue-600 text-white" },
    { id: 4, name: ["Tailwind Css"], color: "bg-indigo-400 text-white" },
  ]
};

const projects = [
  [
    [
      {
        body: "Integer id nunc sit semper purus...",
        photo: "./assets/Presentation maquette.webp",
        alt: "Presentation maquette HUB SCOLAIRE",
        title: "HUB SCOLAIRE",
        href: "https://www.figma.com/design/NHsQZb0WGrWq9n8I9V1KmY/Hub-Projects?node-id=0-1&t=fc6NPTXRCjLxIYEM-1",
        type: "figma",
        techs: [
          { id: 1, name: ["Figma"], color: "bg-blue-400 text-white" },
          { id: 2, name: ["Photoshop"], color: "bg-gray-900 text-white" },
          { id: 3, name: ["React Native"], color: "bg-blue-600 text-white" },
          { id: 4, name: ["Tailwind Css"], color: "bg-indigo-400 text-white" },
        ],
      },
      {
        body: "SO SECURIGAZ is a device that aims to preserve and save human lives against domestic accidents due to forgetfulness or gas leakage.",
        photo: "./assets/Presentation maquette So securigaz.webp",
        alt: "Presentation maquette SO SECURIGAZ",
        title: "SO SECURIGAZ",
        href: "https://www.figma.com/design/WK7yy83bVnJiMh7tVeRj00/SO-SECURIGAZ-APP-MOBILE?node-id=0-1&t=JmPv0BTkwJuZmbqg-1",
        type: "figma",
        techs: [
          { name: ["Figma"], color: "bg-blue-400 text-white" },
          { name: ["React Native"], color: "bg-blue-600 text-white" },
          { name: ["Tailwind Css"], color: "bg-indigo-400 text-white" },
        ],
      },
      {
        body: "Road of RAMADAN banner for COJEC.",
        photo: "./assets/Route de careme COJEC.webp",
        alt: "Route de careme COJEC",
        type: "photoshop",
        title: "BANNER COJEC",
        techs: [
          { name: ["Photoshop"], color: "bg-gray-900 text-white" }
        ],
      }
    ]
  ],
  [
    [
      {
        body: "Presentation flyers of FIRM DIGITAL SARL services.",
        photo: "./assets/FIRM Services.webp",
        alt: "Presentation Service FIRM DIGITAL",
        type: "photoshop",
        title: "FLYERS SERVICES FIRM DIGITAL",
        techs: [
          { name: ["Photoshop"], color: "bg-gray-900 text-white" }
        ],
      },
      {
        body: "FIRM DIGITAL SARL is a dynamic company operating in the digital field.",
        photo: "./assets/Maquette Firm Digital.webp",
        alt: "Presentation maquette WEB SITE FIRM DIGITAL",
        type: "figma",
        title: "WEBSITE FIRM DIGITAL",
        href: "https://www.figma.com/design/J6MWSoDjoJa1D2LBZyWtQE/FIRM-DIGITAL-LANDING-PAGE?node-id=0-1&t=OPrJxT9qpBXclRrD-1",
        techs: [
          { name: ["Figma"], color: "bg-blue-400 text-white" },
          { name: ["React Js"], color: "bg-blue-500 text-white" },
          { name: ["Tailwind Css"], color: "bg-indigo-400 text-white" },
        ],
      }
    ],
  ],
];

// Helper function to generate class names
const classNames = (...classes) => classes.filter(Boolean).join(" ");

// Portfolio component
const Portfolio = () => {
  // Memoized rendering to improve performance
  const renderProjects = useCallback(() => {
    return projects.map((columnGroup, columnGroupIdx) => (
      <div
        key={columnGroupIdx}
        className="space-y-8 xl:contents xl:space-y-0"
      >
        {columnGroup.map((column, columnIdx) => (
          <div
            key={columnIdx}
            className={classNames(
              (columnGroupIdx === 0 && columnIdx === 0) ||
                (columnGroupIdx === projects.length - 1 &&
                  columnIdx === columnGroup.length - 1)
                ? "xl:row-span-2"
                : "xl:row-start-1",
              "space-y-8"
            )}
          >
            {column.map((testimonial, idx) => (
              <ProjectCard key={idx} project={testimonial} />
            ))}
          </div>
        ))}
      </div>
    ));
  }, []);

  return (
    <div className="relative isolate bg-gray-900 pb-32 ">
      {/* Decorative background */}
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" />
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
        <div className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Portfolio</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            I create applications and UI Design for a lot of company and others.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          {/* First Project */}
          <ProjectCard project={firstProject} />
          {/* Other projects */}
          {renderProjects()}
        </div>
      </div>
    </div>
  );
};
ProjectCard.displayName = "Portfolio";
TechBadge.displayName = "Portfolio";
export default Portfolio;

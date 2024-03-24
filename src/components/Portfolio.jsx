const featuredTestimonial = {
  body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
  photo: "./assets/Presentation maquette.png",
  alt: "Presentation maquette HUB SCOLAIRE",
  title: "HUB SCOLAIRE",
  techs: [
    { name: ["Figma"], color: "bg-blue-400 text-white" },
    { name: ["Photoshop"], color: "bg-gray-900 text-white" },
    { name: ["React Native"], color: "bg-blue-600 text-white" },
    { name: ["Tailwind Css"], color: "bg-indigo-400 text-white" },
  ],
};
const testimonials = [
  [
    [
      {
        body: "SO SECURIGAZ is a device that aims to preserve and save human lives against domestic accidents due to forgetfulness or gas leakage.",
        photo: "./assets/Presentation maquette So securigaz.png",
        alt: "Presentation maquette SO SECURIGAZ",
        title: "SO SECURIGAZ",
        techs: [
          { name: ["Figma"], color: "bg-blue-400 text-white" },
          { name: ["React Native"], color: "bg-blue-600 text-white" },
          { name: ["Tailwind Css"], color: "bg-indigo-400 text-white" },
        ],
      },
      {
        body: "Road of RAMADAN banner for COJEC.",
        photo: "./assets/Route de careme COJEC.png",
        alt: "Route de careme COJEC",
        title: "BANNER COJEC",
        techs: [
          { name: ["Photoshop"], color: "bg-gray-900 text-white" }
        ],
      },
      
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Presentation flyers of FIRM DIGITAL SARL services.",
        photo: "./assets/FIRM Services.png",
        alt: "Presentation Service FIRM DIGITAL",
        title: "FLYERS SERVICES FIRM DIGITAL",
        techs: [
          { name: ["Photoshop"], color: "bg-gray-900 text-white" }
        ],
      },
      {
        body: "FIRM DIGITAL SARL is a dynamic company operating in the digital field.",
        photo: "./assets/Maquette Firm Digital.png",
        alt: "Presentation maquette WEB SITE FIRM DIGITAL",
        title: "WEB SITE FIRM DIGITAL",
        techs: [
          { name: ["Figma"], color: "bg-blue-400 text-white" },
          { name: ["React Js"], color: "bg-blue-500 text-white" },
          { name: ["Tailwind Css"], color: "bg-indigo-400 text-white" },
        ],
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Portfolio() {
  return (
    <div className="relative isolate bg-gray-900 pb-32 ">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Portfolio
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            I create applications and UI Design for a lot of company and others.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl lg:mt-10 bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 relative group">
            <div className="overflow-hidden">
              <img
                src={featuredTestimonial.photo}
                alt={featuredTestimonial.alt}
                className="w-full h-full object-cover group-hover:blur-sm transition duration-300"
              />
              <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white flex flex-col gap-5 text-center px-4">
                  <span className="text-xl font-semibold">
                    {featuredTestimonial.title}
                  </span>
                  <span>{featuredTestimonial.body}</span>
                </p>
              </div>
            </div>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <div className="flex-auto">
                <div className="flex flex-wrap items-center gap-2">
                  {featuredTestimonial.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className={`${tech.color} text-xs py-1 font-medium px-4`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.techs.name}
                      className="rounded-2xl bg-white shadow-lg ring-1 p-6 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 relative group"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={testimonial.photo}
                          alt={testimonial.alt}
                          className="w-full h-full object-cover group-hover:blur-sm transition duration-300"
                        />
                        <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                          <p className="text-white flex flex-col gap-5 text-center px-4">
                            <span className="text-xl font-semibold">
                              {testimonial.title}
                            </span>
                            <span className="text-sm">{testimonial.body}</span>
                          </p>
                        </div>
                      </div>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div className="font-light flex flex-wrap items-center gap-2">
                          {testimonial.techs.map((tech) => (
                            <div
                              key={tech.name}
                              className={`${tech.color} text-xs py-1 font-medium px-4`}
                            >
                              <div>{tech.name}</div>
                            </div>
                          ))}
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

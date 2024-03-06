import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(70%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16 ring- sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
        <div className="lg:w-3/5 py-10 h-full">
          <a href="#" className="inline-flex space-x-6">
            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
              Qui suis-je ?
            </span>
          </a>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Pationner du{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-gray-200 inline-block text-transparent bg-clip-text">code et du design</span>
          </h1>
          <p className="mt-6 sm:text-lg text-base leading-7 text-gray-300">
            Je suis un développeur fullstack et UX/UI designer fort de plus de 3
            ans d&apos;expérience. Ma polyvalence et mon sens de l&apos;écoute
            me permettent de m&apos;adapter rapidement à tout défi, tandis que
            ma facilité à travailler en équipe favorise une collaboration
            dynamique. Passionné par la fusion du développement et du design, je
            m&apos;efforce d&apos;apporter des solutions innovantes et
            esthétiques à chaque projet. Découvrez mes compétences variées et
            mes réalisations, et n&apos;hésitez pas à me contacter pour discuter
            de notre prochaine collaboration !
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md flex items-center gap-1 bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.5 20q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.575-2.025 2.138-3.4T11 4.075v8.075L9.4 10.6L8 12l4 4l4-4l-1.4-1.4l-1.6 1.55V4.075q2.575.35 4.288 2.313T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20z"
                ></path>
              </svg>
              Mon CV
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Me contacter <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <img
          className="w-full flex-none rounded-2xl object-cover shadow-xl lg:h-full lg:aspect-auto sm:aspect-square lg:max-w-sm"
          src="./assets/profil.jpg"
          alt="Profil Photo"
        />
      </div>
    </div>
  );
}

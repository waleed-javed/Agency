import { motion } from "framer-motion";
import {
  AnimatedTooltip,
  InfiniteBanner,
  LampContainer,
  TextGenerateEffect,
} from "../..";
import { FloatingNav, NavBar } from "../../ui/floatingNavBar";

const HeroLampBeams = ({
  navLinkItems,
  heading,
  subHeading,
  bannerItems,
  tooltip,
}) => {
  return (
    <>
      <div className="relative flex w-full flex-col overflow-hidden antialiased md:items-center md:justify-center">
        <FloatingNav navItems={navLinkItems} />
        <NavBar />
        <LampContainer className="relative z-0 flex min-h-[90vh] w-full items-center justify-center overflow-hidden rounded-none bg-black">
          {/* Opener */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 100 }}
            transition={{
              delay: 0.4,
              duration: 0.3,
              ease: "easeIn",
            }}
            className="flex max-w-[70rem] flex-wrap bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl md:leading-snug"
          >
            {heading[0]}
            <br />
            {heading[1]}
          </motion.h1>

          {/* sub heading */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 108 }}
            transition={{
              delay: 0.7,
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            <TextGenerateEffect
              words={subHeading}
              childClassName="font-normal text-xl  max-w-lg text-center mx-auto"
            />
          </motion.div>
        </LampContainer>

        {/* call to action */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -190 }}
          transition={{
            delay: 1,
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="text-xl font-semibold text-purple-400 "
        >
          <div className="flex justify-center py-5 ">
            <button className="group relative inline-block cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline shadow-2xl shadow-purple-950">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(192,132,252,0.7)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-3 text-xl ring-1 ring-white/10 ">
                <span>Book A Consultation</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </div>
          <motion.span
            initial={{ y: 0 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
            className="flex justify-center text-center"
          >
            <TextGenerateEffect
              words={
                "Trusted by Founders and Entrepreneurs from all over the world"
              }
              childClassName="font-normal text-xl text-center mx-auto m-0 p-0"
            />
          </motion.span>
          <div className="mt-8 flex w-full flex-row items-center justify-center">
            <AnimatedTooltip items={tooltip} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -115 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "backIn",
          }}
          className="flex min-h-fit flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-400 antialiased dark:bg-black"
        >
          <InfiniteBanner
            items={bannerItems}
            // direction="right"
            speed="slow"
          />
        </motion.div>
      </div>
    </>
  );
};

export default HeroLampBeams;

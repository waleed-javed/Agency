import { motion } from "framer-motion";
import { LampContainer, TextGenerateEffect } from "../..";

const HeroLampBeams = ({ heading, subHeading }) => {
  return (
    <>
      <div className="relative flex w-full flex-col overflow-hidden antialiased md:items-center md:justify-center">
        {/* <FloatingNav navItems={navLinkItems} /> */}
        {/* <NavBar /> */}
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
      </div>
    </>
  );
};

export default HeroLampBeams;

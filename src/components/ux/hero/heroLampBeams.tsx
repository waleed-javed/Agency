import { motion } from "framer-motion";
import {
  FloatingNav,
  InfiniteBanner,
  LampContainer,
  TextGenerateEffect,
} from "../..";
import { HeroComponentProps } from "../../../utilities/utilities";

const HeroLampBeams = ({
  navLinkItems,
  subHeading,
  bannerItems,
}: HeroComponentProps) => {
  return (
    <>
      <div className="relative flex w-full flex-col overflow-hidden antialiased md:items-center md:justify-center">
        <FloatingNav navItems={navLinkItems} />
        <LampContainer className="relative z-0 flex min-h-[90vh] w-full items-center justify-center overflow-hidden rounded-none bg-black">
          <motion.h1
            initial={{ opacity: 0.3, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="mt-6 bg-opacity-50 bg-gradient-to-br from-neutral-50 to-neutral-300 bg-clip-text py-4 text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
          >
            We Make Apps <br /> Websites &amp; Brands.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0.3, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <TextGenerateEffect
              words={subHeading}
              childClassName="font-normal text-xl  max-w-lg text-center mx-auto"
            />
          </motion.div>
        </LampContainer>

        <div className="-mt-12 flex min-h-[10vh] flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black">
          <InfiniteBanner items={bannerItems} direction="right" speed="slow" />
        </div>
      </div>
    </>
  );
};

export default HeroLampBeams;

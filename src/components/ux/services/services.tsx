import { motion } from "framer-motion";
import { HoverSensitiveCards, TextGenerateEffect, TracingBeam } from "../..";
import { ServiceComponentProps } from "../../../utilities/utilities";

const Service = ({ services }: ServiceComponentProps) => {
  return (
    <>
      <div className="relative flex h-full w-full flex-col justify-center bg-white text-center align-top bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />

        {/* section Headings */}
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeIn",
          }}
          className="relative z-20 bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text pb-4 pt-8 text-4xl font-bold text-transparent sm:text-7xl"
        >
          Our Services
        </motion.p>
        <TracingBeam className="mx-auto max-w-5xl px-8">
          <TextGenerateEffect
            words={"— We provide end-to-end solutions"}
            childClassName="font-normal text-xl max-w-lg text-center mx-auto"
          />

          {/* services */}
          <HoverSensitiveCards items={services} />
        </TracingBeam>
      </div>
    </>
  );
};

export default Service;

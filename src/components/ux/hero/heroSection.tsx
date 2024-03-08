import { motion } from "framer-motion";
import {
  AnimatedTooltip,
  InfiniteBanner,
  TextGenerateEffect,
  WavyBackground,
} from "../..";
import { cn } from "../../../utilities/utilities";
import { FloatingNav, NavBar } from "../../ui/floatingNavBar";

const Hero = ({ navLinkItems, heading, subHeading, bannerItems, tooltip }) => {
  return (
    <>
      <div className="relative flex w-full flex-col overflow-hidden antialiased md:items-center md:justify-center">
        <FloatingNav navItems={navLinkItems} />
        <NavBar />

        <WavyBackground speed="slow-mo" waveWidth={70}>
          <p className="flex max-w-[70rem] flex-wrap items-center justify-center gap-y-5 bg-opacity-50 bg-gradient-to-br from-purple-500 to-neutral-300 bg-clip-text py-4 text-center text-2xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl md:leading-snug lg:text-6xl">
            <span>{heading[0]}</span>
            <span>{heading[1]}</span>
          </p>
          <p className="inter-var mt-4 text-center text-base font-normal text-white md:text-lg">
            {subHeading}
          </p>

          <CTA
            toolTip={tooltip}
            ctaBtnText={sectionConfig.heroConfig.CTA.ctaBtnText}
            ctaText={sectionConfig.heroConfig.CTA.ctaText}
          />
        </WavyBackground>

        <motion.div
          initial={sectionConfig.heroConfig.animation.bannerAnimation.initial}
          whileInView={
            sectionConfig.heroConfig.animation.bannerAnimation.whileInView
          }
          transition={
            sectionConfig.heroConfig.animation.bannerAnimation.transition
          }
          className="flex min-h-fit flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-400 antialiased dark:bg-black"
        >
          <InfiniteBanner items={bannerItems} speed="slow" />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;

// sub components
const CTA = ({ ctaBtnText, ctaText, toolTip, className = "" }) => (
  <>
    {/* call to action */}
    <motion.div
      initial={sectionConfig.ctaConfig.animation.CTA.initial}
      whileInView={sectionConfig.ctaConfig.animation.CTA.whileInView}
      transition={sectionConfig.ctaConfig.animation.CTA.transition}
      className={cn("text-xl font-semibold text-purple-400 ", className)}
    >
      <div className="flex justify-center py-5 ">
        <CTAButton btnText={ctaBtnText} />
      </div>

      {/* cta Text: trusted builders */}
      <motion.span
        initial={sectionConfig.ctaConfig.animation.closeCTA.initial}
        whileInView={sectionConfig.ctaConfig.animation.closeCTA.whileInView}
        transition={sectionConfig.ctaConfig.animation.closeCTA.transition}
        className="flex justify-center text-center"
      >
        <TextGenerateEffect
          words={ctaText}
          childClassName="font-normal text-xs md:text-xl text-center mx-auto m-0 p-0"
        />
      </motion.span>

      {/* people circles */}
      <div className="mt-8 flex w-full flex-row items-center justify-center">
        <AnimatedTooltip items={toolTip} />
      </div>
    </motion.div>
  </>
);

const CTAButton = ({ btnText }) => {
  const handleCrisp = () => {
    const crisp = document.querySelectorAll("chat");
    console.log(crisp);
  };

  return (
    <>
      <button
        onClick={handleCrisp}
        className="group relative inline-block cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline shadow-2xl shadow-purple-950"
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(192,132,252,0.7)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-1.5 py-1 text-xs ring-1 ring-white/10 md:px-4 md:py-3 md:text-xl ">
          <span>{btnText}</span>
          <svg
            width="18"
            height="24"
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
    </>
  );
};

const sectionConfig = {
  // HERO
  heroConfig: {
    animation: {
      heroAnimation: {},
      bannerAnimation: {
        initial: { opacity: 0, y: -115 },
        whileInView: { opacity: 1, y: -50 },
        transition: { duration: 0.5, ease: "backIn" },
      },
    },
    CTA: {
      ctaBtnText: "Book A Consultation",
      ctaText: "Trusted by Founders and Entrepreneurs from all over the world",
    },
  },

  // CTA
  ctaConfig: {
    animation: {
      CTA: {
        initial: { opacity: 0, y: 0 },
        whileInView: { opacity: 1, y: 40 },
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      },
      closeCTA: {
        initial: { y: 0 },
        whileInView: { y: 0 },
        transition: { delay: 0.2, duration: 0.3 },
      },
    },

    // wavyBG
    wavyBg: {},
  },
};

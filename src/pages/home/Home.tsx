import { motion } from "framer-motion";
import {
  FloatingNav,
  LampContainer,
  TextGenerateEffect,
} from "../../components";

const HomePage = () => {
  const words = `— Creating cool experiences is our thing!`;
  const navItems = [
    {
      name: "Portfolio",
      link: "/portfolio",
      // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "/services",
      // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "Contact",
    //   link: "/contact",
    //   // icon: (<IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />),
    // },
  ];

  return (
    <>
      <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-black antialiased relative overflow-hidden">
        <FloatingNav navItems={navItems} />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-8">
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.3, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="mt-6 from-neutral-50 to-neutral-300 bg-opacity-50 text-4xl md:text-7xl font-bold text-center bg-gradient-to-br py-4 bg-clip-text tracking-tight text-transparent"
            >
              We Make Apps <br /> Websites &amp; Brands.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0.3, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              <TextGenerateEffect
                words={words}
                childClassName="font-normal text-base  max-w-lg text-center mx-auto"
              />
            </motion.p>
          </LampContainer>
        </div>
      </div>
    </>
  );
};

export default HomePage;

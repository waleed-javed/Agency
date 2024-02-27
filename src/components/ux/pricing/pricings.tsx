import { motion } from "framer-motion";
import { PriceCard, TextGenerateEffect } from "../..";
const PricingComponent = ({ pricingInfo }) => {
  console.log(pricingInfo);
  return (
    <div>
      <div className="mt-3 justify-center py-3 font-bold text-white ">
        <div>
          {/* section Headings */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.4,
              ease: "easeIn",
            }}
            className="relative z-20 bg-gradient-to-b from-neutral-50  to-neutral-500 bg-clip-text p-1 text-center text-4xl font-bold text-transparent"
          >
            {pricingInfo.heading}
          </motion.h1>
          <p className="mx-4 mt-4 max-w-2xl text-center text-sm text-gray-500 md:mx-auto md:text-lg dark:text-white ">
            <TextGenerateEffect
              words={pricingInfo.subHeading}
              childClassName="font-normal text-xl max-w-lg text-center mx-auto"
            />
          </p>
        </div>
      </div>
      <div className="relative z-10 mx-4 mt-20 grid h-fit grid-cols-1 content-center items-center gap-8 md:mx-8 lg:grid-cols-3">
        <PriceCard data={pricingInfo.pricing.packageA} />
        <PriceCard data={pricingInfo.pricing.packageC} highlight={true} />
        <PriceCard data={pricingInfo.pricing.packageB} />
      </div>
    </div>
  );
};

export default PricingComponent;

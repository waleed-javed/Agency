import { Spotlight, TextGenerateEffect } from "../../components";

const HomePage = () => {
  const words = `— Creating cool experiences is our thing!`;

  return (
    <div className="h-[35rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          We Make Apps <br /> Websites &amp; Brands.
        </h1>
        <p className="">
          <TextGenerateEffect
            words={words}
            childClassName="font-normal text-base  max-w-lg text-center mx-auto"
          />
        </p>
      </div>
    </div>
  );
};

export default HomePage;

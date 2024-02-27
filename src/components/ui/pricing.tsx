const PriceCard = ({ data, highlight = false }) => {
  return (
    <>
      <div className="relative rounded-3xl sm:mx-8 lg:mx-0">
        <div
          className={`flex h-full flex-col justify-between rounded-3xl border border-purple-500 ${highlight ? "bg-purple-600" : "bg-zinc-950"}  px-6 py-8 sm:mx-8 lg:mx-0`}
        >
          <div>
            <h3
              id="tier-components-page"
              className={`text-base leading-7 lg:text-xl ${highlight ? "font-bold text-black" : "font-semibold text-purple-600 "}`}
            >
              {data.heading}
            </h3>
            <p className="mt-4 gap-x-2">
              <span
                className={`block h-6 text-sm font-medium  ${highlight ? "text-black" : "text-neutral-300"}`}
              >
                Pause or cancel anytime
              </span>
              <span
                className={`text-4xl font-bold tracking-tight ${highlight ? "text-zinc-950" : " text-neutral-300"}`}
              >
                {data.pricing}
              </span>
            </p>
            <p
              className={`lg:text-md mt-6 text-sm leading-7 ${highlight ? "text-zinc-950" : " text-neutral-300"}`}
            >
              {data.offer}
            </p>
            <div
              className={`flex h-[24rem] ${highlight ? "text-zinc-950" : " text-neutral-300"}`}
            >
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 sm:mt-10"
              >
                {data.offerItem.map((text, idx) => (
                  <li className="flex gap-x-3" key={idx}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-6 w-5 flex-none  ${highlight ? "text-zinc-950" : " text-purple-500"}`}
                      aria-hidden="true"
                    >
                      <path
                        d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                        fill="currentColor"
                        strokeWidth="0"
                      ></path>
                    </svg>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <button
              pirsch-event="Pricing Click"
              aria-describedby="tier-components-page"
              className={`mt-8 block w-full rounded-md px-3.5 py-2.5 
              text-center text-sm font-semibold 
               ring-1 ring-inset
              ${highlight ? "text-black ring-purple-950 hover:bg-purple-900 hover:text-white hover:ring-purple-300 focus-visible:outline-purple-950" : "text-neutral-300 ring-purple-500 hover:bg-purple-600 hover:text-white hover:ring-purple-300 focus-visible:outline-purple-600"}
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              sm:mt-10`}
            >
              {data.CTA}
            </button>
            <button className="mt-2 text-left text-xs text-neutral-100">
              Questions?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCard;

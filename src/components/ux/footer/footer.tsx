const Footer = () => {
  return (
    <>
      <div className="relative z-50  mx-auto mt-3 max-w-6xl border-t border-purple-900 px-8 py-20">
        <div className="grid grid-cols-1 items-start md:grid-cols-3 ">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col md:flex-row md:space-x-2">
              <div className="flex flex-row items-center justify-between space-x-1">
                {/* <img
                  alt="logo"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="mr-2 h-5 w-5 font-bold"
                  src="/_next/image?url=%2Flogo.png&amp;w=48&amp;q=75"
                /> */}

                <a
                  className="!ml-0 mt-4 text-2xl font-bold tracking-normal text-purple-700 md:mt-0"
                  href="/"
                >
                  Ghamiz
                </a>
              </div>
            </div>

            <p className="my-4 text-left text-sm font-light text-neutral-300">
              © 2024 Ghamiz Solutions Private Limited. <br />
              All rights reserved.
            </p>

            <a
              href="mailto:contact@aceternity.com"
              className="mb-4 text-left text-sm font-light text-neutral-300"
            >
              contact@ghamiz.com
            </a>
            <div className="mb-8 flex items-center space-x-2 text-left text-sm font-light text-neutral-300 lg:mb-0">
              <a href="https://twitter.com/codeChaudhary" target="__blank">
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
                  className="h-4 w-4"
                >
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                </svg>
              </a>
              <span>/</span>

              <a href="https://twitter.com/codeChaudhary" target="__blank">
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
                  className="h-4 w-4"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-2  flex  flex-wrap text-sm md:justify-end">
            <div className="mx-4 mb-4 flex flex-col">
              <p className="mb-4 font-bold">Company</p>

              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/work"
              >
                Work
              </a>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/#services"
              >
                Services
              </a>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/pricing"
              >
                Pricing
              </a>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/templates"
              >
                Templates
              </a>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/blog"
              >
                Blog
              </a>

              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/contact"
              >
                Contact
              </a>
            </div>
            <div className="mx-4 mb-4 flex flex-col">
              <p className="mb-4 font-bold">Services</p>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/landing-page-development"
              >
                Landing Page Development
              </a>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/saas-app-development"
              >
                SaaS App development
              </a>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/custom-webapp-development"
              >
                Custom Webapp Development
              </a>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/ai-app-development"
              >
                AI App Development
              </a>
            </div>
            <div className="mx-4 mb-4 flex flex-col">
              <p className="mb-4 font-bold">Legal</p>

              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/privacy"
              >
                Privacy Policy
              </a>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/terms"
              >
                Terms and Conditions
              </a>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/refund"
              >
                Refund Policy
              </a>
            </div>
            <div className="mx-4 mb-4 flex flex-col">
              <p className="mb-4 font-bold">Tools</p>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/components"
              >
                Awesome Components
              </a>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/tools/tailwindcss-buttons"
              >
                Tailwindcss Buttons
              </a>
              <a
                className="hover:text-themecolor mb-2 text-neutral-300"
                href="/mechanical"
              >
                Mechanical Keyboard
              </a>
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://waleedjaved-portfolio.netlify.app"
                className="hover:text-themecolor mb-2 text-neutral-300"
              >
                About Founder
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

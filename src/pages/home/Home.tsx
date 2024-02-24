import { HeroComponent, ServicesComponent } from "../../components";

const HomePage = () => {
  const words = `— Creating cool experiences is our thing!`;
  const navItems = [
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Services",
      link: "/services",
    },
  ];

  const servicesArray = [
    {
      title: "Logo & Branding",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Graphic Designing",
      link: "https://twitter.com/codeChaudhry",
      description:
        "Creating interactive products and services by moving beyond the item to know how users will operate the interfaces design that we've made",
      image:
        "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif",
    },
    {
      title: "Digital Marketing",
      link: "https://twitter.com/codeChaudhry",
      description:
        "Creating interactive products and services by moving beyond the item to know how users will operate the interfaces design that we've made",
      image: "",
    },
    {
      title: "Web Development",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
      image: "",
    },
    {
      title: "Backend Development",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
      image: "",
    },
    {
      title: "E-Commerce Development",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
      image: "",
    },
    {
      title: "Mobile Application Development",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
      image: "",
    },
    {
      title: "SalesForce Development",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
      image: "",
    },
  ];

  return (
    <div className="bg-black">
      <HeroComponent
        navLinkItems={navItems}
        subHeading={words}
        bannerItems={servicesArray}
      />

      <ServicesComponent services={servicesArray} />
    </div>
  );
};

export default HomePage;

import {
  Footer,
  HeroComponent,
  PricingComponent,
  ServicesComponent,
} from "../../components";
import { data, people } from "../../data/data";

const HomePage = () => {
  return (
    <div className="bg-black">
      <HeroComponent
        navLinkItems={data.navItems}
        heading={data.heroSection.heading}
        subHeading={data.heroSection.subHeading}
        bannerItems={data.servicesSection.servicesArray}
        tooltip={people}
      />

      <ServicesComponent services={data.servicesSection.servicesArray} />

      <PricingComponent pricingInfo={data.pricingSection} />
      <Footer />
    </div>
  );
};

export default HomePage;

import {
  CTASection,
  FeaturesSection,
  Footer,
  HeroSection,
  NavBar,
} from "../components";

// import userGlobalStore from "../store/userStore";

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-full justify-btween">
      {/* Navbar set up */}
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;

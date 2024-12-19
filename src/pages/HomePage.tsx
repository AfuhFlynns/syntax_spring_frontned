import { HeroSection, NavBar } from "../components";

// import userGlobalStore from "../store/userStore";

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-full justify-btween">
      {/* Navbar set up */}
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default HomePage;

import { Link } from "react-router-dom";
import appLogo from "../assets/logo/fav-icon.png";
import { urlLinks } from "../utils/constants/constants";
import CustomButton from "./CustomButton";
import { LogInIcon, Menu, X } from "lucide-react";
import globalAppStore from "../store/appStore";

const NavBar = () => {
  const { isMobileNavBar, setIsMobileNavBar } = globalAppStore();
  return (
    <nav
      className={`sticky bg-primary-bg bg-opacity-90 top-0 left-0 right-0 w-full flex flex-row items-center justify-between h-[70px] py-4 xl:px-[44px] md:px-[38px] lg:px-[44px] px-[8px] `}
    >
      <Link
        to="/"
        className="flex flex-row items-center w-auto h-full"
        onClick={() => setIsMobileNavBar(false)}
      >
        <img
          src={appLogo}
          alt="syntax spring logo"
          className="object-contain w-[40px] h-[40px] aspect-1/1"
        />
        <h2 className="ml-2 font-bold text-primary-white text-[18px]">
          Syntax Spring
        </h2>
      </Link>
      {/* Desktop nav items */}
      <ul className="xl:w-[40%]  md:w-[58%] sm:hidden hidden h-full md:flex flex-row items-center justify-between text-regular text-primary-text">
        {urlLinks.map((item, index) => (
          <Link key={`${index}-${item.id}`} to={item.url}>
            <li className="list-none">{item.title}</li>
          </Link>
        ))}
        <Link to="/log-in">
          <CustomButton text="Login / SignUp" />
        </Link>
      </ul>
      {/* Mobile nav items set up*/}
      <button
        onClick={() => setIsMobileNavBar(true)}
        className="md:hidden h-[40px] w-[30px]"
      >
        <Menu className="w-full h-full text-primary-text" />
      </button>
      {isMobileNavBar && (
        <div className="absolute top-0 right-0 flex flex-row items-start justify-between w-screen h-screen bg-black md:hidden bg-opacity-80">
          <button
            onClick={() => setIsMobileNavBar(false)}
            className="w-[30px] h-[40px] ml-4 mt-1"
          >
            <X className="w-full h-full text-primary-text" />
          </button>
          <ul className="flex flex-col items-end justify-start h-full md:hiddentext-primary-text  w-[70%] text-regular bg-secondary-bg relative text-primary-text">
            {urlLinks.map((item, index) => (
              <Link
                onClick={() => setIsMobileNavBar(false)}
                key={`${index}-${item.id}`}
                to={item.url}
                className={`border-b-solid border-b-[1px] border-b-primary-border w-full h-[3rem] flex flex-row items-center justify-end px-4 ${
                  index === 0 && "mt-6"
                }`}
              >
                <li className="list-none">{item.title}</li>
              </Link>
            ))}
            <div className="w-full h-[8rem] flex flex-row items-center justify-center">
              <Link to="/log-in" onClick={() => setIsMobileNavBar(false)}>
                <button className="button">
                  <LogInIcon />
                  <span>Login / SignUp</span>
                </button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

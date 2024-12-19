import SectionWrapper from "../wrapper/SectionWrapper";
import { computerCodeVideo } from "../assets/videos";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import appLogo from "../assets/logo/fav-icon.png";

const BlinkingCursor: React.FC = () => {
  const words = ["learn", "practice", "learn, practice and compete"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBeforeNextWord = 1500;

    if (!isDeleting && displayedText === words[currentWordIndex]) {
      setTimeout(() => setIsDeleting(true), delayBeforeNextWord);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const timeout = setTimeout(() => {
        const currentWord = words[currentWordIndex];
        setDisplayedText(
          isDeleting
            ? currentWord.substring(0, displayedText.length - 1)
            : currentWord.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isDeleting, words, currentWordIndex]);

  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlinkInterval);
  }, []);

  return (
    <div
      style={{ fontSize: "24px", fontFamily: "monospace" }}
      className="capitalize"
    >
      {displayedText}
      <span style={{ visibility: cursorVisible ? "visible" : "hidden" }}>
        |
      </span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full md:py-6">
      <div className="flex md:flex-row flex-col items-center h-[70%] w-full gap-6 md:gap-2 justify-center md:justify-between overflow-hidden">
        <div className="flex flex-col items-start justify-start gap-4">
          <h1 className="font-bold text-primary-white md:text-h1 text-h2">
            Welcome to{" "}
            <span className="text-primary-button-blue-light">
              Syntax Spring
            </span>
          </h1>
          <h3 className="font-light text-gray-200 md:text-h3 text-[18px]">
            <span className="text-[20px]">Transform Your Coding Journey.</span>
            <p>Learn, Practice and Compete in Real-Time</p>
            {/*<BlinkingCursor /> */}
          </h3>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          transition={{
            animationDuration: 3000,
            animationTransitionDuration: 3000,
            animationDelay: 0,
          }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-[60%] w-[100%] h-[60%] md:h-full rounded-lg overflow-hidden"
        >
          <video
            src={computerCodeVideo}
            autoPlay
            muted
            className="object-contain w-full h-full rounded-lg aspect-video shadow-ShadowRoot-shadow"
            loop
          />
        </motion.div>
      </div>
      <div className="w-full h-[15%] md:h-[40%] flex flex-row items-center justify-center">
        <Link to="/sign-up">
          <button className="h-[3.3rem] w-[20rem] button flex flex-row items-center justify-center hover:ring-blue-400 hover:scale-[0.98] hover:bg-secondary-bg">
            <img
              src={appLogo}
              alt="syntax spring logo"
              className="object-cover w-[2.5rem] h-full aspect-1/1 invert-1"
            />
            <span className="text-h3">Get Started for Free</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionWrapper(HeroSection);

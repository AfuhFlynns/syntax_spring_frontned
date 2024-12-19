import SectionWrapper from "../wrapper/SectionWrapper";
import { computerCodeVideo } from "../assets/videos";

const HeroSection = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-full">
      <h1 className="text-white text-h1">HeroSection</h1>
      <video
        src={computerCodeVideo}
        autoPlay
        muted
        className="w-[80%] h-[60%] aspect-video object-contain"
        loop
      />
    </div>
  );
};

export default SectionWrapper(HeroSection);

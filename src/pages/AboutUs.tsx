import { NavBar } from "../components";

const AboutUs = () => {
  return (
    <div className="text-center">
      <NavBar />
      <div className="py-10 text-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-6 text-3xl font-bold text-center">
            About Syntax Spring
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            At Syntax Spring, we aim to transform the way developers learn and
            grow by providing a platform to practice coding, solve challenges,
            and compete in real-time. Whether you're a beginner or an
            experienced programmer, we have the tools and community to help you
            thrive.
          </p>
          <p className="text-lg leading-relaxed">
            Our platform offers real-world coding problems, leaderboards to
            showcase your skills, and an environment to build projects that
            matter. Join us and take your coding journey to the next level!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import SectionWrapper from "../wrapper/SectionWrapper";

const FeaturesSection = () => {
  return (
    <section className="md:w-full md:h-[60%] h-[70%] w-[96%] ml-[1rem] md:ml-0 self-center py-10 bg-secondary-bg section-border rounded-lg flex flex-row items-center">
      <div className="flex flex-col items-center justify-start w-full h-full gap-4 px-6 mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-bold text-center text-primary-white">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <h3 className="mb-2 text-xl font-semibold text-primary-text">
              Real-Time Challenges
            </h3>
            <p className="text-gray-300">
              Solve coding challenges and see where you stand on the global
              leaderboard.
            </p>
          </div>
          <div className="text-center text-primary-text">
            <h3 className="mb-2 text-xl font-semibold">Interactive Learning</h3>
            <p className="text-gray-300">
              Engage with step-by-step tutorials and hands-on exercises designed
              to boost your skills.
            </p>
          </div>
          <div className="text-center text-primary-text">
            <h3 className="mb-2 text-xl font-semibold">
              Collaborative Environment
            </h3>
            <p className="text-gray-300">
              Connect with other developers, share knowledge, and work on
              projects together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(FeaturesSection);

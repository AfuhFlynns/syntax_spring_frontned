import SectionWrapper from "../wrapper/SectionWrapper";

const FeaturesSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-bold text-center">Key Features</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <h3 className="mb-2 text-xl font-semibold">Real-Time Challenges</h3>
            <p className="text-gray-700">
              Solve coding challenges and see where you stand on the global
              leaderboard.
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-xl font-semibold">Interactive Learning</h3>
            <p className="text-gray-700">
              Engage with step-by-step tutorials and hands-on exercises designed
              to boost your skills.
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-xl font-semibold">
              Collaborative Environment
            </h3>
            <p className="text-gray-700">
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

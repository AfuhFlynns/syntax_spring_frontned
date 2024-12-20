import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-10 mb-14 text-white section-border bg-blue-600 md:-mt-[12rem] -mt-[9rem] w-[93%] rounded-lg">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="mb-4 font-bold md:text-h1 text-h2">
          Ready to Transform Your Coding Journey?
        </h2>
        <p className="mb-6 text-lg">Sign up today and get started for free!</p>
        <Link
          to="/sign-up"
          className="px-6 py-2 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CTASection;

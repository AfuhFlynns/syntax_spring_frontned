import { Link } from "react-router-dom";

import SectionWrapper from "../wrapper/SectionWrapper";

const CTASection = () => {
  return (
    <section className="py-10 text-white bg-blue-600">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="mb-4 text-3xl font-bold">
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

export default SectionWrapper(CTASection);

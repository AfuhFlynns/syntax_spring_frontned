const SectionWrapper = (Component: () => JSX.Element) => {
  return function HOC() {
    return (
      <section className="min-h-full min-w-full w-full h-full xl:px-[44px] md:px-[38px] lg:px-[44px] px-[4px]">
        <Component />
      </section>
    );
  };
};

export default SectionWrapper;

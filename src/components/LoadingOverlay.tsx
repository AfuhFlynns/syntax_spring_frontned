import CustomLoader2 from "./CustomLoader2";

const LoadingOverlay = ({ text = "Please wait..." }: { text?: string }) => {
  return (
    <div className="absolute inset-0 flex flex-row items-center justify-center w-full h-full gap-4 overflow-hidden bg-secondary-bg">
      <CustomLoader2 /> <p className="text-lg text-primary-text">{text}</p>
    </div>
  );
};

export default LoadingOverlay;

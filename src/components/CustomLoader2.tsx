import React from "react";

const CustomLoader2: React.FC = ({
  customClassName,
}: {
  customClassName?: string;
}) => {
  return (
    <div className={`w-auto h-auto ${customClassName}`}>
      <div className="border-t-4 border-blue-500 border-opacity-75 rounded-full w-14 h-14 animate-spin" />
    </div>
  );
};

export default CustomLoader2;

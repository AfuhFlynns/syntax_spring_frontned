import { Button } from "@mui/material";
// import { ElementType } from "react";

const CustomButton = ({
  text,
  className,
}: //   Icon,
//   IconClassName,
{
  text: string;
  className?: string;
  //   Icon?: HTMLImageElement;
  //   IconClassName?: string;
}) => {
  return (
    <Button style={{ height: "auto", width: "auto" }}>
      <div className={`button ${className}`}>
        {/*<Icon className={IconClassName} /> */} <span>{text}</span>
      </div>
    </Button>
  );
};

export default CustomButton;

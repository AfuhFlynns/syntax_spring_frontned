import { Button } from "@mui/material";
// import { ElementType } from "react";

const CustomButton = ({
  text,
  className,
  type,
}: //   Icon,
//   IconClassName,
{
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  //   Icon?: HTMLImageElement;
  //   IconClassName?: string;
}) => {
  return (
    <Button type={type} style={{ height: "auto", width: "auto" }}>
      <div className={`button ${className}`}>
        {/*<Icon className={IconClassName} /> */} <span>{text}</span>
      </div>
    </Button>
  );
};

export default CustomButton;

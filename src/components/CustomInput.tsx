import { Email, VerifiedUser } from "@mui/icons-material";
import { IconButton, Input, InputAdornment } from "@mui/material";
import { Eye, EyeClosed, User2Icon } from "lucide-react";
import { ChangeEvent, useState } from "react";

const CustomInput = ({
  placeholder,
  name,
  type,
  className,
  value,
  onChange,
}: {
  placeholder: string;
  name: string;
  type: string;
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const inputsStyle = {
    color: "white",
    outline: "none",
    fontSize: "medium",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const handleEyeIconClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setTimeout(() => {
      setIsPasswordVisible(false);
    }, 2000);
  };
  if (
    (name === "password" || name === "confirmPassword") &&
    type === "password"
  ) {
    return (
      <Input
        placeholder={placeholder}
        type={isPasswordVisible ? "text" : "password"}
        name={name}
        value={value}
        className={`input ${className}`}
        style={inputsStyle}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton type="button" onClick={handleEyeIconClick}>
              {isPasswordVisible ? (
                <EyeClosed className="text-primary-text" />
              ) : (
                <Eye className="text-primary-text" />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
    );
  } else if (name === "value" && type === "text") {
    return (
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        className={`input ${className}`}
        style={inputsStyle}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton type="button">
              <VerifiedUser className="text-primary-text" />
            </IconButton>
          </InputAdornment>
        }
      />
    );
  } else if (name === "email" && type === "email") {
    return (
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        className={`input ${className}`}
        style={inputsStyle}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton type="button">
              <Email className="text-primary-text" />
            </IconButton>
          </InputAdornment>
        }
      />
    );
  } else if (name === "username" && type === "text") {
    return (
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        className={`input ${className}`}
        style={inputsStyle}
        onChange={onChange}
        autoCapitalize="on"
        endAdornment={
          <InputAdornment position="end">
            <IconButton type="button">
              <User2Icon className="text-primary-text" />
            </IconButton>
          </InputAdornment>
        }
      />
    );
  } else {
    return (
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        className={`${className} `}
        style={{ cursor: "pointer" }}
        onChange={onChange}
      />
    );
  }
};

export default CustomInput;

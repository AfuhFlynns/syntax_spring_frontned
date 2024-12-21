import {
  Button,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomLoader1 } from "../components";
import userGlobalStore from "../store/userStore";
import { toast } from "react-toastify";
import { Eye, EyeClosed } from "lucide-react";
const inputsStyle = {
  color: "white",
  outline: "none",
  fontSize: "medium",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ResetPassword = () => {
  const { resetPassword, error, loading } = userGlobalStore();
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const handleInputChange = (value: string) => {
    setPassword(value);
  };

  const handleFormSubmit = async () => {
    if (password.length < 8) {
      toast.warn(
        "Please enter a valid password. Must include at least 8 characters"
      );
    } else {
      await resetPassword(token, password);
      toast.success("Password reset successful");
      setPassword("");

      navigate("/log-in");
    }
  };
  const handleEyeIconClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setTimeout(() => {
      setIsPasswordVisible(false);
    }, 2000);
  };
  return (
    <div className="w-full h-full">
      <section className="flex flex-col items-center justify-center w-full h-full min-h-full gap-4 py-6 mb-5">
        <header className="flex flex-col items-center justify-center w-full h-auto px-4 text-center">
          <h1 className="font-bold text-h2 text-primary-white">
            <span>Reset your password</span>
          </h1>
          <p className="text-regular text-primary-white">
            Enter a valid password of at least 8 characters
          </p>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
          className="rounded-md bg-secondary-bg h-[46%] w-[94%] lg:w-[40%] xl:w-[40%] md:w-[50%] border-[1px] border-solid border-primary-border flex flex-col items-start justify-between gap-8 p-[2.5rem] md:p-[3rem] text-primary-text"
        >
          <div className="w-full h-[6rem] gap-3 flex flex-col items-start justify-between">
            <InputLabel className="h-[3rem]" htmlFor="password">
              <span className="input-row-label">Password</span>
            </InputLabel>
            <Input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              className="bg-transparent border-solid border-[1px] border-secondary-button-outline rounded-small h-[90%] w-full px-3"
              value={password}
              style={inputsStyle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange(e.target.value)
              }
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
          </div>
          {error && <span className="text-red-600 text-regular">{error}</span>}
          <Button type="submit" className="submit-btn">
            {loading ? (
              <CustomLoader1 customClassName="text-primary-white" />
            ) : (
              <span className="capitalize text-primary-text text-regular">
                Proceed
              </span>
            )}
          </Button>
        </form>
      </section>
    </div>
  );
};

export default ResetPassword;

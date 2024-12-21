import { ArrowBack } from "@mui/icons-material";
import { Button, Input, InputLabel } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import userGlobalStore from "../store/userStore";
import { CustomLoader1 } from "../components";
const inputsStyle = {
  color: "white",
  outline: "none",
  fontSize: "medium",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { forgotPassword, loading, error } = userGlobalStore();

  const handleInputChange = (value: string) => {
    setEmail(value);
  };
  const handleFormSubmit = async () => {
    if (email.length < 4 || !email.includes(".com")) {
      toast.warn("Please enter a valid email");
    } else {
      await forgotPassword(email);
      toast.success("Reset link sent successfully");
      setIsSubmitted(true);
    }
  };
  return (
    <div className="w-full h-full">
      {isSubmitted ? (
        <section className="flex flex-col items-center justify-center w-full h-full min-h-full gap-4 py-6 mb-5">
          <div className="rounded-md bg-secondary-bg h-[46%] w-[94%] lg:w-[40%] xl:w-[40%] md:w-[50%] border-[1px] border-solid border-primary-border flex flex-col items-start justify-between gap-2 p-[2.5rem] md:p-[3rem] text-primary-text">
            <div className="text-center">
              <p className="text-lg text-primary-white">
                A password reset link was sent to {email}
              </p>
              <p className="text-regular text-primary-white">
                Check your mails to reset your password
              </p>
            </div>
            <Link
              to="/log-in"
              className="relative flex flex-row items-center justify-center gap-4 w-full h-[3rem] capitalize rounded-xl text-regular hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-primary-gradient shadow-ShadowRoot-shadow"
            >
              <ArrowBack className="text-primary-text" />
              <span className="capitalize text-primary-text text-regular">
                Back to Log In
              </span>
            </Link>
          </div>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center w-full h-full min-h-full gap-4 py-6 mb-5">
          <header className="flex flex-col items-center justify-center w-full h-auto px-4 text-center">
            <h1 className="font-bold text-h2 text-primary-white">
              <span>Forgot your password</span>
            </h1>
            <p className="text-regular text-primary-white">
              Enter your email and we'll send you a link to reset your password
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
              <InputLabel className="h-[3rem]" htmlFor="email">
                <span className="input-row-label">Email Address</span>
              </InputLabel>
              <Input
                type="email"
                name="email"
                className="bg-transparent border-solid border-[1px] border-secondary-button-outline rounded-small h-[90%] w-full px-3"
                value={email}
                style={inputsStyle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e.target.value)
                }
              />
            </div>
            {error && (
              <span className="text-red-600 text-regular">{error}</span>
            )}
            <Button type="submit" className="submit-btn">
              {loading ? (
                <CustomLoader1 customClassName="text-primary-white" />
              ) : (
                <span className="capitalize text-primary-text text-regular">
                  Send Password Reset Email
                </span>
              )}
            </Button>
          </form>
        </section>
      )}
    </div>
  );
};

export default ForgotPassword;

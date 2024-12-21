import React, { useState } from "react";
import { CustomInput, CustomLoader1 } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { Button, InputLabel } from "@mui/material";
import { Celebration, GitHub, Google } from "@mui/icons-material";
import userGlobalStore from "../store/userStore";
import { toast } from "react-toastify";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const { signUp, loading, error } = userGlobalStore();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    if (formData.password === formData.confirmPassword) {
      await signUp(formData.password, formData.email, formData.username);
      toast.success("Account created successfully!");
      toast.info(`A verification email has been sent to: ${formData.email}`);
      navigate("/verify-account");
      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
      });
    } else {
      return toast.warn("Both passwords must match");
    }
  };

  const handleUnavailableServiceClick = () => {
    toast.info("Service not available for now!");
  };
  return (
    <div className="flex flex-col items-center justify-start w-full h-full min-h-full gap-4 py-6">
      <header className="flex flex-col items-center justify-center w-full h-auto text-primary-text">
        <h1 className="text-h2">
          <span>Join</span>{" "}
          <span className="text-primary-button-blue-light">Syntax Spring</span>{" "}
          <span>today</span>
        </h1>
        <span className="text-captions">Transform Your Coding Journey.</span>
        <p className="text-captions">
          Learn, Practice and Compete in Real-Time{" "}
        </p>
      </header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
        className="rounded-md bg-secondary-bg h-auto w-[94%] lg:w-[40%] xl:w-[40%] md:w-[50%] border-[1px] border-solid border-primary-border flex flex-col items-start justify-between gap-6 p-[2.5rem] md:p-[3rem] text-primary-text"
      >
        <div className="input-row">
          <InputLabel htmlFor="username">
            <span className="input-row-label">Username</span>
          </InputLabel>
          <CustomInput
            placeholder="e.g JohnDoe..."
            type="text"
            name="username"
            className=""
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-row">
          <InputLabel htmlFor="email">
            <span className="input-row-label">Email Address</span>
          </InputLabel>
          <CustomInput
            placeholder="e.g youremail@provider.com..."
            type="email"
            name="email"
            className=""
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-row">
          <InputLabel htmlFor="password">
            <span className="input-row-label">Password</span>
          </InputLabel>
          <CustomInput
            placeholder="e.g PA$5W0RD2..."
            type="password"
            name="password"
            className=""
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-row">
          <InputLabel htmlFor="password">
            <span className="input-row-label">Confirm Password</span>
          </InputLabel>
          <CustomInput
            placeholder="e.g PA$5W0RD2..."
            type="password"
            name="confirmPassword"
            className=""
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        {error && <span className="text-red-600 text-regular">{error}</span>}
        <div className="flex flex-row items-center justify-center h-[3rem] md:h-[3.6rem] w-full">
          <Button type="submit" className="submit-btn">
            {loading ? (
              ""
            ) : (
              <Celebration className="absolute text-primary-text left-3" />
            )}
            {loading ? (
              <CustomLoader1 customClassName="animate-spin text-primary-text" />
            ) : (
              <span className="capitalize text-primary-text text-regular">
                Join Syntax Spring
              </span>
            )}
          </Button>
        </div>
        <div className="flex flex-row items-center justify-center h-[3rem] md:h-[2.6rem] w-full relative">
          <div className="absolute flex flex-row items-center justify-center w-auto h-full px-2 text-md bg-secondary-bg">
            <span>Or continue with</span>
          </div>
          <hr className="w-full border-solid border-primary-border h-[2px]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-4 h-[3rem] md:h-[3.6rem] w-full">
          <Button
            className="w-[50%] h-full rounded-2xl"
            style={{ border: "solid 1px #4A5568" }}
            onClick={handleUnavailableServiceClick}
          >
            <GitHub className="text-primary-text" />
          </Button>
          <Button
            className="w-[50%] h-full rounded-2xl"
            style={{ border: "solid 1px #4A5568" }}
            onClick={handleUnavailableServiceClick}
          >
            <Google className="text-primary-text" />
          </Button>
        </div>
        <footer className="input-footer">
          <span>Already have an account?</span>
          <Link
            to="/log-in"
            className="text-primary-button-blue-light hover:underline"
          >
            Sign In
          </Link>
        </footer>
      </form>
    </div>
  );
};

export default SignUpPage;

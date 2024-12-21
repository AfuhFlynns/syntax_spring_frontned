import React, { useState } from "react";
import { CustomInput, CustomLoader1 } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { Button, InputLabel } from "@mui/material";
import { LockIcon } from "lucide-react";
import { Check, GitHub, Google } from "@mui/icons-material";
import userGlobalStore from "../store/userStore";
import { toast } from "react-toastify";

const LogInPage: React.FC = () => {
  const navigate = useNavigate();
  const { logIn, loading, error } = userGlobalStore();
  const [form, setForm] = useState<{
    value: string;
    password: string;
  }>({
    value: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleInputChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleReminderToggle = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmitForm = async () => {
    await logIn(form.password, form.value);
    navigate("/dashboard");
    toast.success("Login successful");
    setForm({
      value: "",
      password: "",
    });
  };

  const handleUnavailableServiceClick = () => {
    toast.info("Service not available for now!");
  };

  return (
    <div className="auth-screen">
      <header className="flex flex-row items-center justify-center w-full h-auto">
        <h1 className="font-bold text-h2 text-primary-white">
          <span>Welcome back</span>{" "}
          <span className="text-primary-button-blue-light">Innovator!</span>
        </h1>
      </header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitForm();
        }}
        className="form"
      >
        <div className="input-row">
          <InputLabel className="" htmlFor="value">
            <span className="input-row-label">Email Address / Username</span>
          </InputLabel>
          <CustomInput
            placeholder="e.g JohnDoe or youremail@provider.com ..."
            type="text"
            name="value"
            className=""
            value={form.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e.target.name, e.target.value)
            }
          />
        </div>
        <div className="input-row">
          <InputLabel className="" htmlFor="password">
            <span className="input-row-label">Password</span>
          </InputLabel>
          <CustomInput
            placeholder="e.g PA$5W0RD2..."
            type="password"
            name="password"
            className=""
            value={form.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e.target.name, e.target.value)
            }
          />
        </div>
        <div className="flex flex-row h-[1rem] w-full items-center justify-between text-md">
          <div className="h-full w-[50%] flex flex-row items-center justify-start gap-2">
            <button
              type="button"
              onClick={handleReminderToggle}
              className="w-[1.3rem] h-[1.3rem] md:w-[1.1rem] md:h-[1.1rem] rounded-sm border-secondary-button-outline border-[1px] border-solid flex flex-row items-center justify-center"
            >
              {rememberMe ? (
                <Check
                  className="text-primary-text"
                  style={{ height: "95%", width: "95%" }}
                />
              ) : (
                ""
              )}
            </button>
            <InputLabel
              htmlFor="remember"
              className="cursor-pointer"
              onClick={handleReminderToggle}
            >
              <span className="text-md text-primary-text">Remember me</span>
            </InputLabel>
          </div>
          <div className="h-full w-[50%] flex flex-row items-center justify-end text-end text-primary-button-blue-light hover:underline">
            <Link to="/forgot-password">Forgot your password?</Link>
          </div>
        </div>
        {error && <span className="text-red-600 text-regular">{error}</span>}
        <div
          className={`flex flex-row items-center justify-center h-[3rem] md:h-[3.6rem] w-full ${
            (form.password === "" ||
              form.value === "" ||
              rememberMe === false) &&
            "opacity-60"
          } opacity-100`}
        >
          <Button
            type="submit"
            className="submit-btn"
            disabled={
              form.password === "" || form.value === "" || rememberMe === false
            }
          >
            {loading ? (
              ""
            ) : (
              <LockIcon className="absolute text-primary-text left-3" />
            )}
            {loading ? (
              <CustomLoader1 customClassName="animate-spin text-primary-text" />
            ) : (
              <span className="capitalize text-primary-text text-regular">
                Sign In
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
          <span>New here?</span>
          <Link
            to="/sign-up"
            className="text-primary-button-blue-light hover:underline"
          >
            Sign Up
          </Link>
        </footer>
      </form>
    </div>
  );
};

export default LogInPage;

import { Button, Input, InputLabel } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomLoader1 } from "../components";
import userGlobalStore from "../store/userStore";
import { toast } from "react-toastify";
const inputsStyle = {
  color: "white",
  outline: "none",
  fontSize: "medium",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const VerificationPage = () => {
  const { verifyUser, error, loading } = userGlobalStore();
  const [verificationCode, setVerificationCode] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (value: string) => {
    setVerificationCode(value);
  };

  const handleFormSubmit = async () => {
    if (verificationCode.length < 6 || verificationCode.length > 6) {
      toast.warn("Please enter a valid code. Must include 6 characters");
    } else {
      await verifyUser(verificationCode);
      toast.success("Verification successful");
      setVerificationCode("");
      navigate("/log-in");
    }
  };
  return (
    <div className="w-full h-full">
      <section className="flex flex-col items-center justify-center w-full h-full min-h-full gap-4 py-6 mb-5">
        <header className="flex flex-col items-center justify-center w-full h-auto px-4 text-center">
          <h1 className="font-bold text-h2 text-primary-white">
            <span>Verify your email</span>
          </h1>
          <p className="text-regular text-primary-white">
            Enter the verification code sent to your email
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
            <InputLabel className="h-[3rem]" htmlFor="code">
              <span className="input-row-label">Verification Code</span>
            </InputLabel>
            <Input
              type="text"
              name="code"
              className="bg-transparent border-solid border-[1px] border-secondary-button-outline rounded-small h-[90%] w-full px-3"
              value={verificationCode}
              style={inputsStyle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange(e.target.value)
              }
            />
          </div>
          {error && <span className="text-red-600 text-regular">{error}</span>}
          <Button type="submit" className="submit-btn">
            {loading ? (
              <CustomLoader1 customClassName="text-primary-white" />
            ) : (
              <span className="capitalize text-primary-text text-regular">
                Verify Email
              </span>
            )}
          </Button>
        </form>
      </section>
    </div>
  );
};

export default VerificationPage;

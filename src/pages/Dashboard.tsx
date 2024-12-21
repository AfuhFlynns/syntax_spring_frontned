import React from "react";
import {Link} from "react-router-dom"
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import "tailwindcss/tailwind.css";
import userGlobalStore from "../store/userStore";
import { Link } from "react-router-dom";
import appLogo from "../assets/logo/fav-icon.png";

// Custom AppBar styling
const CustomAppBar = styled(AppBar)(() => ({
  background: "#1A202C",
  borderBottom: `1px solid #4A5568`,
}));

const Dashboard: React.FC = () => {
  // Zustand store
  const { user } = userGlobalStore();

  return (
    <Box className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <CustomAppBar position="static">
        <Toolbar className="flex justify-between">
          <Link to="/" className="flex flex-row items-center w-auto h-full">
            <img
              src={appLogo}
              alt="syntax spring logo"
              className="object-contain w-[40px] h-[40px] aspect-1/1"
            />
            <h2 className="ml-2 font-bold text-primary-white text-[18px]">
              Syntax Spring
            </h2>
          </Link>
          <Box className="flex items-center gap-4">
            <Avatar
              alt={user?.username}
              src={`/api/user-avatar/${user?.avatar}`}
            />
            <Typography variant="subtitle1" className="text-gray-300">
              {user?.username}
            </Typography>
          </Box>
        </Toolbar>
      </CustomAppBar>

      {/* Content */}
      <Box className="p-6">
        {/* Welcome Banner */}
        <Box className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
          <Typography
            variant="h5"
            className="font-semibold mb-2 text-blue-light"
          >
            Welcome back, {user?.username}!
          </Typography>
          <Typography className="text-gray-300">
            Explore challenges, labs, and coding adventures to upskill yourself
            today.
          </Typography>
        </Box>

        {/* Cards Section */}
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Coding Challenges */}
          <Box className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
            <Typography variant="h6" className="text-white font-semibold mb-2">
                Coding Challenges
            </Typography>
            <Typography className="text-gray-400 mb-4">
              Solve interactive coding challenges to improve your skills.
            </Typography>
            <Button
              variant="contained"
              style={{ background: "var(--button-gradient)", color: "#fff" }}
              fullWidth
            >
               <Link to="/challenges">
                Start Now
              </Link>
            </Button>
          </Box>

          {/* Labs */}
          <Box className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
            <Typography variant="h6" className="text-white font-semibold mb-2">
              Coding Labs
            </Typography>
            <Typography className="text-gray-400 mb-4">
              Practice in a real-world coding environment.
            </Typography>
            <Button
              variant="contained"
              style={{ background: "var(--button-gradient)", color: "#fff" }}
              fullWidth
            >
             <Link to="/challenges">
              Explore Labs
              </Link>
            </Button>
          </Box>

          {/* AI Problem Solver */}
          <Box className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
            <Typography variant="h6" className="text-white font-semibold mb-2">
              AI Problem Solver
            </Typography>
            <Typography className="text-gray-400 mb-4">
              Get help from AI to solve coding problems instantly.
            </Typography>
            <Button
              variant="contained"
              style={{ background: "var(--button-gradient)", color: "#fff" }}
              fullWidth
            >
              <Link to="/challenges">
              Ask AI
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

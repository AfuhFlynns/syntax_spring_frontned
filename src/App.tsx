import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
// Custom imports
import userGlobalStore from "./store/userStore";
import LoadingOverlay from "./components/LoadingOverlay";
import { useAuth } from "./Hooks";
import {
  AboutUs,
  ChallengesPage,
  Dashboard,
  ErrorPage,
  HomePage,
  Leaderboard,
} from "./pages";

function App() {
  const [authErrorMsg, setAuthErrorMsg] = useState("");
  const { isCheckingAuth, error, checkAuth } = useAuth();
  const { user } = userGlobalStore();

  // const notify = () => {
  //   toast.success("Hello, world", {
  //     autoClose: 5000, // Closes after 5 seconds
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //   });
  // };

  const setAuthCheckErrorMsgText = () => {
    // Proper error handling for users
    if (error?.message.includes("500")) {
      setAuthErrorMsg("An unkown error occured. Try again later");
    } else if (error?.message.includes("timed out")) {
      setAuthErrorMsg("Request timeout. Please check your internet connection");
    } else {
      setAuthErrorMsg("Request timeout. Please check your internet connection");
    }
    console.error(error);
    console.log(authErrorMsg);
  };

  const handleCheckAuth = async () => {
    // For easy reusability
    await checkAuth();
    setAuthCheckErrorMsgText();
  };

  useEffect(() => {
    let isMounted = true; // Component mount state
    const controller = new AbortController(); // component controller state
    // Get user data once the app laods if user exists
    if (isMounted === true) {
      handleCheckAuth();
    }
    //Clear use effect
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  console.log(user, error);
  return (
    <main
      className={`w-screen h-screen transition-all duration-300 ${
        isCheckingAuth ? "overflow-hidden" : "overflow-x-hidden"
      } bg-primary-bg`}
    >
      {/* Toast container set up */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover={true}
        theme="dark"
      />
      {!isCheckingAuth && (
        <div className={`w-full h-full`}>
          {/* Routes set up */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path={`user/${user?.username}`} element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      )}
      {/* Loading overlay */}
      {isCheckingAuth && (
        <div className="absolute inset-0 flex items-center justify-center w-screen h-screen overflow-hidden bg-secondary-bg">
          <LoadingOverlay text="Please wait..." />
        </div>
      )}
    </main>
  );
}

export default App;

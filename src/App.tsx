import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// Custom imports
import userGlobalStore from "./store/userStore";
import LoadingOverlay from "./components/LoadingOverlay";
import { useAuth } from "./Hooks";
import {
  AboutUs,
  ChallengesPage,
  Dashboard,
  ErrorPage,
  ForgotPassword,
  HomePage,
  Leaderboard,
  LogInPage,
  ResetPassword,
  SignUpPage,
  VerificationPage,
} from "./pages";

function App() {
  const { isCheckingAuth, error, checkAuth } = useAuth();
  const { user, sendCheckAuth, isAuthenticated, users, challenges } =
    userGlobalStore();
  const location = useLocation();

  useEffect(() => {
    if (!isCheckingAuth && !user) {
      checkAuth();
    }
  }, [sendCheckAuth, isCheckingAuth, user, checkAuth]);

  useEffect(() => {
    if (error) {
      console.error("Authentication error:", error);
      // You can add a toast notification here if needed
    }
  }, [error]);

  const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    if (!isAuthenticated) {
      return <Navigate to="/log-in" state={{ from: location }} replace />;
    }
    return <>{children}</>;
  };

  const PublicOnlyRoute = ({ children }: { children: ReactNode }) => {
    if (isAuthenticated) {
      return <Navigate to="/dashboard" replace />;
    }
    return <>{children}</>;
  };

  if (isCheckingAuth) {
    return (
      <div className="absolute inset-0 flex items-center justify-center w-screen h-screen overflow-hidden bg-secondary-bg">
        <LoadingOverlay text="Please wait..." />
      </div>
    );
  }

  console.log(user, users, challenges);

  return (
    <main className="w-screen h-screen overflow-x-hidden bg-primary-bg">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        pauseOnHover={true}
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route
          element={
            <PublicOnlyRoute>
              <LogInPage />
            </PublicOnlyRoute>
          }
          path="/log-in"
        />
        <Route
          element={
            <PublicOnlyRoute>
              <SignUpPage />
            </PublicOnlyRoute>
          }
          path="/sign-up"
        />
        <Route
          element={
            <PublicOnlyRoute>
              <ForgotPassword />
            </PublicOnlyRoute>
          }
          path="/forgot-password"
        />
        <Route
          element={
            <PublicOnlyRoute>
              <ResetPassword />
            </PublicOnlyRoute>
          }
          path="/reset-password/:token"
        />
        <Route
          element={
            <PublicOnlyRoute>
              <VerificationPage />
            </PublicOnlyRoute>
          }
          path="/verify-account"
        />

        <Route
          element={
            <ProtectedRoute>
              <ChallengesPage />
            </ProtectedRoute>
          }
          path="/challenges"
        />
        <Route
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
          path="/leaderboard"
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Navigate to={`/dashboard/user/${user?.username}`} replace />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/user/:username"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;

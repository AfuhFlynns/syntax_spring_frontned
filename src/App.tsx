import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import userGlobalStore from "./store/userStore";
import LoadingOverlay from "./components/LoadingOverlay";
import { useAuth } from "./Hooks";
import {
  AboutUs,
  ChallengesPage,
  SyntaxSpringEditor,
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
  const { user, sendCheckAuth, isAuthenticated } = userGlobalStore();
  const location = useLocation();

  useEffect(() => {
    if (!isCheckingAuth && !user) {
      checkAuth();
    }
  }, [sendCheckAuth, isCheckingAuth, user, checkAuth]);

  useEffect(() => {
    if (error) {
      console.error("Authentication error:", error);
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

  return (
    <main className="w-screen h-screen overflow-x-hidden bg-primary-bg">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        pauseOnHover
        theme="dark"
      />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-privacy" element={<AboutUs />} />

        <Route
          path="/log-in"
          element={
            <PublicOnlyRoute>
              <LogInPage />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <PublicOnlyRoute>
              <SignUpPage />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicOnlyRoute>
              <ForgotPassword />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <PublicOnlyRoute>
              <ResetPassword />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/verify-account"
          element={
            <PublicOnlyRoute>
              <VerificationPage />
            </PublicOnlyRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/challenges"
          element={
            <ProtectedRoute>
              <ChallengesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/playground/:challengeId"
          element={
            <ProtectedRoute>
              <SyntaxSpringEditor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {user?.username ? (
                <Navigate to={`/dashboard/user/${user.username}`} replace />
              ) : (
                <ErrorPage />
              )}
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

        {/* Catch-All */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      ;
    </main>
  );
}

export default App;

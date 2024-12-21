import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import userGlobalStore from "../store/userStore";

const Dashboard: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const { user } = userGlobalStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Here you would typically fetch the user's dashboard data
        // For example: const dashboardData = await fetchUserDashboard(username);

        // For now, we'll just check if the username matches the logged-in user
        if (user?.username !== username) {
          setError("You don't have permission to view this dashboard.");
          navigate("/dashboard");
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to load dashboard data. Please try again later.");
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [username, user, navigate]);

  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Welcome to your dashboard, {username}!</h1>
      {/* Add your dashboard content here */}
      <div>
        <h2>Your Progress</h2>
        {/* Add progress information */}
      </div>
      <div>
        <h2>Recent Challenges</h2>
        {/* Add recent challenges */}
      </div>
      <div>
        <h2>Leaderboard Position</h2>
        {/* Add leaderboard information */}
      </div>
    </div>
  );
};

export default Dashboard;

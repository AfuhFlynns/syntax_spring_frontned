import { useEffect, useState } from "react";
import axios from "axios";

// axios.create({}).defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const url = "http://localhost:8000/auth/users/check-auth";
// const url = "http://localhost:8000/auth/users/sign-in";

// Define an interface for the data structure
interface UserData {
  id: string;
  email: string;
  username: string;
  // Add other properties as needed
}
interface LoginResponse {
  user: UserData;
  token: string;
  message: string;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  // In the component:
  const [data, setData] = useState<LoginResponse | null>(null); // Specify the type here
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = async (url: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // In fetchUserData:
      const response = await axios.get<LoginResponse>(url);
      setData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
        setError(`Error: ${error.response?.data?.message || error.message}`);
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      axios.interceptors.request.use((request) => {
        console.log("Starting Request", request);
        return request;
      });

      axios.interceptors.response.use((response) => {
        console.log("Response:", response);
        return response;
      });
      try {
        await fetchUserData(url);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An unexpected error occurred.");
      }
    };

    void fetchData();
  }, []);

  return (
    <div>
      <h1>Syntax Spring App</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!isLoading && !error && (
        <div>
          <p>Data loaded successfully!</p>
          <pre>{data?.message}</pre>
          <pre>{data?.user.email}</pre>
          <pre>{data?.user.username}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

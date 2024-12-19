import { useState, useCallback } from "react"; // Assuming you're using axios for API calls
import { responseDataTypes } from "../TYPES";
import { protectedAxios } from "../api/axios.config";
import { authEndPoint } from "../utils/constants/constants";
import userGlobalStore from "../store/userStore";

const useAuth = () => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);
  const [error, setError] = useState<Error | null | { message: string }>();
  const { setUser } = userGlobalStore();

  const checkAuth = useCallback(async () => {
    setIsCheckingAuth(true);
    try {
      const response = await protectedAxios.get<responseDataTypes>(
        authEndPoint
      );
      if (response.data.user) setUser(response.data.user); // Update user in the global store
      setError(null);
    } catch (error: any | (Error | { message: string })) {
      setError(error ? error : "An Unkown error occured");
    } finally {
      setIsCheckingAuth(false);
    }
  }, [setUser]);

  return { isCheckingAuth, error, checkAuth };
};

export default useAuth;

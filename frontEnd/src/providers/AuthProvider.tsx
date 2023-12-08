import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define interfaces
interface AuthContextProps {
  userId: number | null;
  email: string | null;
  role: number | null;
  isLoggedIn: boolean;
  login: (userId: number, email: string, role: number) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Create context
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Create context provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<number | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<number | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fetch user data from AsyncStorage on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem("userId");
        const storedEmail = await AsyncStorage.getItem("email");
        const storedRole = await AsyncStorage.getItem("role");

        if (storedUserId && storedEmail && storedRole) {
          setUserId(Number(storedUserId));
          setEmail(storedEmail);
          setRole(Number(storedRole));
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Define login and logout functions
  const login = (newUserId: number, newEmail: string, newRole: number) => {
    setUserId(newUserId);
    setEmail(newEmail);
    setRole(newRole);
    setIsLoggedIn(true);

    // Store user data in AsyncStorage
    AsyncStorage.setItem("userId", String(newUserId));
    AsyncStorage.setItem("email", newEmail);
    AsyncStorage.setItem("role", String(newRole));
  };

  const logout = () => {
    setUserId(null);
    setEmail(null);
    setRole(null);
    setIsLoggedIn(false);

    // Clear user data from AsyncStorage
    AsyncStorage.removeItem("userId");
    AsyncStorage.removeItem("email");
    AsyncStorage.removeItem("role");
  };

  // Provide the context values to the children components
  const contextValue: AuthContextProps = {
    userId,
    email,
    role,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Create a custom hook to consume the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

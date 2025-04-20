
import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  id: number;
  email: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<boolean>;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = user !== null;

  const login = async (email: string, password: string) => {
    // In a real app, this would make an API request to authenticate
    try {
      // Simulate API call
      if (email && password) {
        // Mock user for demo purposes
        const mockUser = { id: 1, email, name: email.split('@')[0] };
        setUser(mockUser);
        localStorage.setItem("user", JSON.stringify(mockUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const register = async (email: string, password: string, name: string) => {
    // In a real app, this would make an API request to register
    try {
      // Simulate API call
      if (email && password && name) {
        // Mock user for demo purposes
        const mockUser = { id: Date.now(), email, name };
        setUser(mockUser);
        localStorage.setItem("user", JSON.stringify(mockUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Register error:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const forgotPassword = async (email: string) => {
    // In a real app, this would make an API request to send password reset email
    try {
      // Simulate API call
      if (email) {
        // Just return true to simulate success
        return true;
      }
      return false;
    } catch (error) {
      console.error("Forgot password error:", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        forgotPassword,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

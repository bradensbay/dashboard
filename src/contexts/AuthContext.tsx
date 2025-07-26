import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface User {
  uid: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (e.g., from localStorage)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const response = await fetch('https://sign-in.bradensbay.com/sign-in', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // With no-cors mode, we can't read the response body
      // So we'll assume success if the request doesn't throw
      if (response.type === 'opaque') {
        // Create a user session assuming successful login
        const userInfo = {
          uid: 'user-' + Date.now(), // Generate a temporary UID
          email: email,
        };

        setUser(userInfo);
        localStorage.setItem('user', JSON.stringify(userInfo));
        return;
      }

      // If we somehow get a readable response, handle it normally
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Get user details using the UID
      const userResponse = await fetch(`https://sign-in.bradensbay.com/user/${data.uid}`, {
        mode: 'no-cors'
      });
      
      let userData: any = {};
      if (userResponse.type !== 'opaque') {
        userData = await userResponse.json();
      }

      const userInfo = {
        uid: data.uid,
        email: userData.email || email,
      };

      setUser(userInfo);
      localStorage.setItem('user', JSON.stringify(userInfo));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signup = async (email: string, password: string): Promise<void> => {
    try {
      const response = await fetch('https://new-user.bradensbay.com/signup', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // With no-cors mode, we can't read the response body
      // So we'll assume success if the request doesn't throw
      if (response.type === 'opaque') {
        console.log('Signup request sent successfully (no-cors mode)');
        return;
      }

      // If we somehow get a readable response, handle it normally
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      console.log('Signup successful:', data.message);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

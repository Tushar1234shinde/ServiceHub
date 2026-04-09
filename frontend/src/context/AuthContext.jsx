import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext(null);
const STORAGE_KEY = "marketplace-auth";

function readSession() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(readSession);

  useEffect(() => {
    if (session) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [session]);

  const value = useMemo(
    () => ({
      user: session?.user || null,
      token: session?.accessToken || null,
      isAuthenticated: Boolean(session?.accessToken),
      async login(payload) {
        const response = await api.login(payload);
        const nextSession = {
          user: {
            id: response.userId,
            name: response.name,
            email: response.email,
            role: response.role,
            status: response.status,
            verified: Boolean(response.verified),
            profileImage: response.profileImage || null
          },
          accessToken: response.accessToken,
          refreshToken: response.refreshToken
        };
        setSession(nextSession);
        return nextSession;
      },
      async register(payload) {
        const response = await api.register(payload);
        const nextSession = {
          user: {
            id: response.userId,
            name: response.name,
            email: response.email,
            role: response.role,
            status: response.status,
            verified: Boolean(response.verified),
            profileImage: response.profileImage || null
          },
          accessToken: response.accessToken,
          refreshToken: response.refreshToken
        };
        setSession(nextSession);
        return nextSession;
      },
      logout() {
        setSession(null);
      }
    }),
    [session]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

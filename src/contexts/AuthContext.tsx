import React, { createContext, FC, PropsWithChildren, useState } from "react";

interface Props {
  isAuthenticated: boolean;
  login: (userToken: string) => void;
  logout: () => void;
  signup: (username: string) => void;
  validateUser: (username: string) => boolean;
  findUsername: () => string;
}

export const AuthContext = createContext<Props>({} as Props);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const signup = (username: string) => {
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const newUser = {
      username: username,
      isLoggedIn: "true",
    };

    const updatedUsers = users.map((user) => ({
      ...user,
      isLoggedIn: "false",
    }));

    updatedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const validateUser = (username: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const isUser = users.find((user) => user.username === username);
    if (!isUser) {
      return false;
    }

    return true;
  };

  const login = (username: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const updatedUsers = users.map((user) => ({
      ...user,
      isLoggedIn: user.username === username ? "true" : "false",
    }));

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const logout = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const logOutUsers = users.map((user) => ({ ...user, isLoggedIn: "false" }));

    localStorage.setItem("users", JSON.stringify(logOutUsers));
  };

  const findUsername = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedInUser = users.find((user) => user.isLoggedIn == "true");

    return loggedInUser.username;
  };

  const isAuthenticated = true;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        signup,
        validateUser,
        findUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

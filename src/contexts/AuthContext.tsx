import React, { createContext, FC, PropsWithChildren, useState } from "react";

interface Props {
  isAuthenticated: boolean;
  login: (userToken: string) => void;
  logout: () => void;
  signup: (username: string) => void;
  validateUser: (username: string) => boolean;
  findUsername: () => string;
  assignAvatarColor: (username: string, hex: string) => void;
  getAvatarColor: (username: string) => string | undefined;
  assignNickname: (username: string, nickname: string) => void;
  findNickname: (nickname: string) => string;
  removeUser: (username: string) => void;
}

interface Users {
  username: string;
  isLoggedIn: boolean;
}

interface UsersInfo {
  username: string;
  avatarColor: string;
  nickname: string;
}

export const AuthContext = createContext<Props>({} as Props);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const signup = (username: string) => {
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const newUser = {
      username: username,
      isLoggedIn: true,
    };

    const updatedUsers = users.map((user: Users) => ({
      ...user,
      isLoggedIn: false,
    }));

    updatedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const validateUser = (username: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const isUser = users.find((user: Users) => user.username === username);
    if (!isUser) {
      return false;
    }

    return true;
  };

  const login = (username: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const updatedUsers = users.map((user: Users) => ({
      ...user,
      isLoggedIn: user.username === username ? true : false,
    }));

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const logout = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const logOutUsers = users.map((user: Users) => ({
      ...user,
      isLoggedIn: false,
    }));

    localStorage.setItem("users", JSON.stringify(logOutUsers));
  };

  const findUsername = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedInUser = users.find((user: Users) => user.isLoggedIn == true);

    return loggedInUser.username;
  };

  const removeUser = (username: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const updatedUsers = users.filter(
      (user: Users) => user.username !== username
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const assignAvatarColor = (hex: string, username: string) => {
    const storedUsersInfo = localStorage.getItem("usersInfo");
    const usersInfo: UsersInfo[] = storedUsersInfo
      ? JSON.parse(storedUsersInfo)
      : [];

    const userExists = usersInfo.some((user) => user.username === username);

    let updatedUsers: UsersInfo[];

    if (userExists) {
      updatedUsers = usersInfo.map((user) =>
        user.username === username ? { ...user, avatarColor: hex } : user
      );
    } else {
      updatedUsers = [
        ...usersInfo,
        {
          username: username,
          avatarColor: hex,
          nickname: "",
        },
      ];
    }

    localStorage.setItem("usersInfo", JSON.stringify(updatedUsers));
  };

  const getAvatarColor = (username: string) => {
    const storedUsersInfo = localStorage.getItem("usersInfo");
    const usersInfo: UsersInfo[] = storedUsersInfo
      ? JSON.parse(storedUsersInfo)
      : [];

    const findUserAvatarColor = usersInfo.find(
      (user: UsersInfo) => user.username === username
    );

    if (!findUserAvatarColor) return;

    return findUserAvatarColor.avatarColor;
  };

  const assignNickname = (username: string, nickname: string) => {
    const storedUserInfo = localStorage.getItem("usersInfo");
    const usersInfo: UsersInfo[] = storedUserInfo
      ? JSON.parse(storedUserInfo)
      : [];

    const user = usersInfo.find((user) => {
      return user.username == username;
    });

    if (user) {
      const updatedUsers = usersInfo.map((user) =>
        user.username === username ? { ...user, nickname: nickname } : user
      );

      localStorage.setItem("usersInfo", JSON.stringify(updatedUsers));
    }
  };

  const findNickname = (username: string) => {
    const users = JSON.parse(localStorage.getItem("usersInfo") || "[]");
    const usersInfo: UsersInfo = users.find(
      (user: UsersInfo) => user.username == username
    );

    return usersInfo?.nickname;
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
        assignAvatarColor,
        getAvatarColor,
        assignNickname,
        findNickname,
        removeUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { useState, createContext, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Store token in localStorage whenever the user state changes
  useEffect(() => {
    if (user?.token) {
      localStorage.setItem("token", user.token);
    }
  }, [user]); // Only runs when `user` changes

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

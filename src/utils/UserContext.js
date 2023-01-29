import { createContext } from "react";

const initialState = {
  user: { name: "John", email: "john@example.com" },
  setUser: () => {},
};

const UserContext = createContext(initialState);

UserContext.displayName = "UserContext";

export default UserContext;

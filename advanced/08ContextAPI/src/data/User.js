import { createContext, useContext } from "react";

export const UserContext = createContext({
	user: { username: "", password: "" },
	setUser: () => {},
});

export const UserContextProvider = UserContext.Provider;

const useUser = () => {
	return useContext(UserContext);
};

export default useUser;

import { ReactNode, createContext, useContext, useState } from "react";

type authContextType = {
    userEmail: string;
};

const userContext: authContextType = {
    userEmail: "",
};

const UserContext = createContext<authContextType>(userContext);

export function useAuth() {
    return useContext(UserContext);
}

type Props = {
    children: ReactNode;
};

export function UserProvider({ children }: Props) {
    const [userEmail, setUser] = useState<string>("");

    const value = {
        userEmail
    }
    return (
        <>
            <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
        </>
    );
}
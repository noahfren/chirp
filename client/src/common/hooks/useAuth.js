import { createContext, useContext, useState } from "react";

// useAuth - Hook to consume and manage auth throughout app
// Ripped from https://usehooks.com/useAuth and https://usehooks.com/useAsync/

const authContext = createContext();

// Provider component to wrap children in authContext's Provider
// eslint-disable-next-line react/prop-types
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Consumer hook for children to access authContext and rerender when it updates
export const useAuth = () => {
    return useContext(authContext);
};

// Provider hook that returns active user and auth methods
const useProvideAuth = () => {
    // Man age active user as state
    const [activeUser, setActiveUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Helper to run code after a slight delay to simulate an async server call
    // Returns a promise that resolves after .5 seconds
    const delayWithLoading = (cb) => {
        setLoading(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        }).then(() => {
            cb();
        }).catch((err) => {
            setError(err);
            alert(err.message);
        }).finally(() => {
            setLoading(false);
        });
};

    // Auth lifecycle methods
    // TODO: replace mock auth logic
    const logIn = (userName) => {
        return delayWithLoading(() => {
            setActiveUser({
                userName,
                displayName: "My Name",
            });
        });
    };

    const logOut = () => {
        return delayWithLoading(() => {
            setActiveUser(null);
        });
    };

    return {
        activeUser,
        loading,
        error,
        logIn,
        logOut,
    };
};

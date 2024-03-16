import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useEffect } from 'react';
import React from 'react';
const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser ] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, intializerUser);
        return unsubscribe;
    }, [])

    async function intializerUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    }
    return (
        <AuthContext.Provider value={value}>
            
        </AuthContext.Provider>
    )
}
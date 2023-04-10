import React, { useState, useEffect } from 'react';
import { auth } from '../Firebase';
import { useHistory } from 'react-router-dom';
export let AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
    let [user, setuser] = useState(false);
    let [isLoading, setloading] = useState(true);
    
    let history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setuser(user);
            setloading(false);
            if (user) history.push('/chat');
        });
    }, [user, history]);

    return (
        <AuthContext.Provider value={user}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../config/firebase.config.js"
import { useQuery } from "@tanstack/react-query"






export const AuthContext = createContext({})
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])


    const { data: profileImage = [], refetch, isLoading } = useQuery({

		queryKey: ['profiledata', user?.email],
		queryFn: async () => {
			const res = await fetch(`https://deplefy-server.vercel.app/profile?email=${user?.email}`)
			const data = await res.json();
			return data;
		}
	})


	console.log(profileImage)
    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading,
        googleSingIn,
        profileImage,
        isLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider; 




   
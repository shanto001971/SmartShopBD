import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


const auth = getAuth(app);
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [checkOutId, setCheckOutId] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const facebookLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }


    const singUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const LogInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const UpdateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })

    };







    const UserEmailVerify = () => {
        return sendEmailVerification(auth.currentUser)

        // .then(() => {
        //     // Email verification sent!
        //     console.log("Email verification sent!");
        //     // Update UI elements
        //     disableFeaturesUntilVerification();
        // })
        // .catch((error) => {
        //     console.error("Error sending email verification", error);
        // });
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, []);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const authInfo = {
        user,
        setUser,
        loading,
        LogInUser,
        singUpUser,
        LogOutUser,
        UpdateUserProfile,
        UserEmailVerify,
        setCheckOutId,
        checkOutId,
        setSearchData,
        searchData,
        isOpen,
        setIsOpen,
        toggleDrawer,
        googleLogin,
        facebookLogin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
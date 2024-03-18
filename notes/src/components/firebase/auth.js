import { GoogleAuthProvider, createUserWithEmailAndPassword,
    signInWithPopup,
    signInWtihEmailAndPassword,
 } from 'firebase/auth';
import { auth } from './firebase';


export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, pasword);
};

export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWtihEmailAndPassword(auth, email, password);
};
export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    return result;
};

export const doSignOut = () => {
    return auth.signOut()
};
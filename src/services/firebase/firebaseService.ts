import { auth, facebookProvider, googleProvider } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getIdToken, User, signInWithPopup } from "firebase/auth";
import { FirebaseError } from "firebase/app";

export const registerWithEmailAndPassword = async(
  email: string, 
  password: string
): Promise<{user: User | null, error: string | null}> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return { user, error: null };
  } catch (error) {
    return error instanceof FirebaseError 
      ? { user: null, error: error.message }
      : { user:null, error: 'Unkown Error' };
  }
};

export const loginWithEmailAndPassword = async(
  email: string,
  password: string
) : Promise<{ user: User | null, error: string | null }> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return { user, error: null };
  } catch (error) {
    return error instanceof FirebaseError 
      ? { user: null, error: error.message }
      : { user:null, error: 'Unkown Error' };
  }
};

export const signWithGoogle = async(): Promise<{ user:User | null, error: string | null }> => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user;
    return { user, error: null };
  } catch (error) {
    return error instanceof FirebaseError 
      ? { user: null, error: error.message }
      : { user:null, error: 'Unkown Error' };
  }
};

export const signInWithFacebook = async(): Promise<{ user: User | null, error: string | null }> => {
  try {
    const userCredential = await signInWithPopup(auth, facebookProvider);
    const user = userCredential.user;
    return { user, error: null }
  } catch (error) {
    return error instanceof FirebaseError 
      ? { user: null, error: error.message }
      : { user:null, error: 'Unkown Error' };
  }
};

export const getToken = async(user: User): Promise<{ token: string | null, error: string | null }> => {
  try {
    const token = await getIdToken(user);
    return { token, error: null }
  } catch (error) {
    return error instanceof FirebaseError 
      ? { token: null, error: error.message }
      : { token:null, error: 'Unkown Error' };
  }
};
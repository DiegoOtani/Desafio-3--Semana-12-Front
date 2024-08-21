import { auth, facebookProvider, googleProvider } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getIdToken, User, signInWithPopup } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const errorMessages: { [key: string]: string } = {
  'auth/wrong-password': 'The password is incorrect. Please try again',
  'auth/weak-password': 'The password must be at least 6 characters long',
  'auth/invalid-email': 'Invalid email address.',
  'auth/email-already-in-use': 'This email address is already in use by another account.',
  'auth/credential-already-in-use': 'These credentials are already associated with another account.',
  'auth/invalid-credential': 'Invalid credentials.',
  'auth/invalid-user-token': 'Your session has expired. Please sign in again.',
  'auth/invalid-oauth-provider': 'This sign-in method is not supported for this operation.',
  'auth/unauthorized-domain': 'This domain is not authorized for sign-in operations. Please check the list of authorized domains in the Firebase Console.',
  'auth/user-token-expired': 'Your session has expired. Please sign in again.',
  'auth/user-not-found': 'No user found with this identifier. The account may have been deleted.',
  'auth/missing-password': 'Password not informed',
};

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
      ? { user: null, error: errorMessages[error.code] }
      : { user:null, error: 'Invalid User Credentials' };
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
      ? { user: null, error: errorMessages[error.code] }
      : { user:null, error: 'Invalid User Credentials' };
  }
};

export const signWithGoogle = async(): Promise<{ user:User | null, error: string | null }> => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user;
    return { user, error: null };
  } catch (error) {
    return error instanceof FirebaseError 
      ? { user: null, error: errorMessages[error.code] }
      : { user:null, error: 'Invalid User Credentials' };
  }
};

export const signInWithFacebook = async(): Promise<{ user: User | null, error: string | null }> => {
  try {
    const userCredential = await signInWithPopup(auth, facebookProvider);
    const user = userCredential.user;
    return { user, error: null }
  } catch (error) {
    return error instanceof FirebaseError 
      ? { user: null, error: errorMessages[error.code] }
      : { user:null, error: 'Invalid User Credentials' };
  }
};

export const getToken = async(user: User): Promise<{ token: string | null, error: string | null }> => {
  try {
    const token = await getIdToken(user);
    return { token, error: null }
  } catch (error) {
    return error instanceof FirebaseError 
      ? { token: null, error: errorMessages[error.code] }
      : { token:null, error: 'Invalid User Credentials' };
  }
};
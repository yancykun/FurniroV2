import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { UserParams } from '@/types/index';
import { auth } from '@/lib/firebaseConfig';

// CREATE USER
export const registerUser = async (user: UserParams) => {
    try {
        const newUser = await createUserWithEmailAndPassword(
            auth,
            user.email,
            user.password,
        );
        return { success: true, user: newUser };
    } catch (error: any) {
        let errorMessage = 'An unexpected error occurred. Please try again.';
        if (error.code === 'auth/email-already-in-use') {
            errorMessage = 'Email already in use.';
        }
        console.error('Register User Error:', error);
        return { success: false, message: errorMessage };
    }
};

// SIGN IN USER
export const signInUser = async (user: UserParams) => {
    try {
        const userAccount = await signInWithEmailAndPassword(
            auth,
            user.email,
            user.password,
        );
        return { success: true, user: userAccount };
    } catch (error: any) {
        let errorMessage = 'An unexpected error occurred. Please try again.';
        if (error.code === 'auth/invalid-credential') {
            errorMessage = 'Invalid email or password.';
        } else if (error.code === 'auth/too-many-requests') {
            errorMessage = 'Too many requests. Please try again later.';
        }
        console.error('Signin User Error:', error);
        return { success: false, message: errorMessage };
    }
};

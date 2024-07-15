import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { CheckoutParams, MessageParams, UserParams } from '@/types/index';
import { auth, db } from '@/lib/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

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

// SUBMIT MESSAGE
export const submitMessage = async (message: MessageParams) => {
    try {
        await addDoc(collection(db, 'messages'), message);
        return { success: true };
    } catch (error) {
        console.error('Message error: ', error);
        return {
            success: false,
            message: 'An unexpected error occurred. Please try again.',
        };
    }
};

// CHECKOUT ITEMS
export const submitBill = async (checkout: CheckoutParams) => {
    try {
        const user = auth.currentUser;

        if (user) {
            await addDoc(collection(db, 'users', user.uid, 'orders'), checkout);
            return { succcess: true };
        } else {
            return {
                success: false,
                message: 'You must be logged in to submit your request.',
            };
        }
    } catch (error) {
        console.error('Error submitting bill:', error);
        return {
            return: false,
            message: 'An unexpected error occurred. Please try again.',
        };
    }
};

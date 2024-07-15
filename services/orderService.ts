import { auth, db } from '@/lib/firebaseConfig';
import { Order } from '@/types';
import { collection, getDocs } from 'firebase/firestore';

export const fetchUserOrders = async (): Promise<Order[]> => {
    const user = auth.currentUser;

    if (!user) {
        throw new Error('User is not authenticated');
    }

    const ordersCollection = collection(db, 'users', user.uid, 'orders');
    const ordersSnapshot = await getDocs(ordersCollection);
    return ordersSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            id: doc.id,
            cart: data.cart || [],
        } as Order;
    });
};

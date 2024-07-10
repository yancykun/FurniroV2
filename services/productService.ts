import { db } from '@/lib/firebaseConfig';
import { Product } from '@/types/productType';
import { collection, getDocs } from 'firebase/firestore';

export const fetchProductsFromFirestore = async (): Promise<Product[]> => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() } as Product);
    });
    return products;
};

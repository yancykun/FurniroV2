'use client';

import { fetchProductsFromFirestore } from '@/services/productService';
import { useQuery } from '@tanstack/react-query';

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProductsFromFirestore,
    });
};

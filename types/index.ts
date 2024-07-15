export type Product = {
    id: string;
    sku: string;
    image: string;
    name: string;
    price: number;
    category: string;
    rating: number;
    popularity: number;
    featured: boolean;
    url: string;
    description: string;
};

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PASSWORD = 'password',
    PHONE_INPUT = 'phoneInput',
    SELECT = 'select',
}

export type UserParams = {
    email: string;
    password: string;
};

export type MessageParams = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export type CheckoutParams = {
    firstName: string;
    lastName: string;
    company?: string;
    country: string;
    streetAddress: string;
    city: string;
    province: string;
    phone: string;
    email: string;
};

export const billingFormValues = {
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    streetAddress: '',
    city: '',
    province: '',
    phone: '',
    email: '',
};

export type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
};

export type Order = {
    id: string;
    cart: CartItem[];
};

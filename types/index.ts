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

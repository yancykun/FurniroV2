import { z } from 'zod';

export const UserFormValidation = z.object({
    email: z.string().email('Invalid email address.'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters long.')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
        .regex(/[0-9]/, 'Password must contain at least one number.')
        .regex(
            /[^a-zA-Z0-9]/,
            'Password must contain at least one special character.',
        ),
});

export const MessageValidation = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    subject: z.string().optional(),
    message: z.string().min(1, 'Message is required'),
});

export const CheckoutValidation = z.object({
    firstName: z.string().min(1, 'First name is required.'),
    lastName: z.string().min(1, 'Last name is required.'),
    company: z.string().optional(),
    country: z.string().min(1, 'Country/Region is required.'),
    streetAddress: z.string().min(1, 'Street address is required.'),
    city: z.string().min(1, 'Town/City is required.'),
    province: z.string().min(1, 'Province is required.'),
    phone: z.string().min(1, 'Phone number is required.'),
    email: z.string().email('Invalid email address.'),
});

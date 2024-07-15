'use client';

import { UserFormValidation } from '@/lib/validation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import CustomFormField from '../UI/CustomFormField';
import Link from 'next/link';
import { registerUser } from '@/lib/actions/user.actions';
import { FormFieldType } from '@/types';
import SubmitButton from '../UI/SubmitButton';
import { Alert, AlertDescription, AlertTitle } from '../UI/alert';
import { usePasswordVisibilityStore } from '@/store/usePasswordVisibilityStore';

const SignupForm = () => {
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const { resetPasswordVisibility } = usePasswordVisibilityStore();

    const {
        reset,
        setError,
        formState: { isSubmitting, isSubmitSuccessful, errors },
    } = form;

    const onSubmit = async ({
        email,
        password,
    }: z.infer<typeof UserFormValidation>) => {
        try {
            const response = await registerUser({ email, password });

            if (!response.success) {
                setError('root', {
                    type: 'manual',
                    message: response.message,
                });
            } else {
                resetPasswordVisibility(); //Reset password visibility state after successful submission
                reset(); // Reset the form after successful submission
            }
        } catch (error) {
            console.error('Signup User Error: ', error);
            setError('root', {
                type: 'manual',
                message: 'An unexpected error occurred. Please try again.',
            });
        }
    };

    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex-1 space-y-6"
            >
                <h1 className="mb-4 text-lg text-center font-bold text-color-7 md:text-xl lg:text-2xl">
                    Create an Account
                </h1>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="yancygarret@gmail.com"
                    className="h-[50px] w-full"
                />

                <CustomFormField
                    fieldType={FormFieldType.PASSWORD}
                    control={form.control}
                    name="password"
                    label="Password"
                    className="h-[50px] w-full"
                />

                {isSubmitSuccessful && (
                    <Alert className="h-[70px] w-full bg-green-800">
                        <AlertTitle className="text-color-1">
                            Success!
                        </AlertTitle>
                        <AlertDescription className="text-color-1">
                            Account created successfully.
                        </AlertDescription>
                    </Alert>
                )}

                <SubmitButton
                    isLoading={isSubmitting}
                    type="submit"
                    className="h-[2.875rem] w-full rounded-md border font-medium sm:h-[3rem]"
                >
                    Sign up
                </SubmitButton>

                {errors.root && (
                    <div className="text-red-800 font-semibold">
                        {errors.root.message}
                    </div>
                )}

                <div className="mt-4 flex justify-end gap-4">
                    <p className="text-base font-medium">
                        Already have an account?
                    </p>
                    <Link href="/signin">
                        <p className="text-base font-semibold text-color-4">
                            Sign in
                        </p>
                    </Link>
                </div>
            </form>
        </FormProvider>
    );
};

export default SignupForm;

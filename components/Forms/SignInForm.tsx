'use client';

import { UserFormValidation } from '@/lib/validation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import CustomFormField from '../UI/CustomFormField';
import { FormFieldType } from '@/types/';
import Link from 'next/link';
import SubmitButton from '../UI/SubmitButton';
import { signInUser } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';

const SigninForm = () => {
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const router = useRouter();

    const {
        setError,
        formState: { isSubmitting, errors },
    } = form;

    const onSubmit = async ({
        email,
        password,
    }: z.infer<typeof UserFormValidation>) => {
        try {
            const response = await signInUser({ email, password });

            if (!response.success) {
                setError('root', {
                    type: 'manual',
                    message: response.message,
                });
            } else {
                router.push('/');
            }
        } catch (error) {
            console.error('Signin User Error: ', error);
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
                    Welcome back
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

                <SubmitButton
                    isLoading={isSubmitting}
                    type="submit"
                    className="h-[2.875rem] w-full rounded-md border font-medium sm:h-[3rem] "
                >
                    Sign in
                </SubmitButton>

                {errors.root && (
                    <div className="text-red-800 font-semibold">
                        {errors.root.message}
                    </div>
                )}

                <div className="flex gap-4 justify-end mt-4">
                    <p className="text-base font-medium">
                        Don`t have an account?
                    </p>
                    <Link href="/signup">
                        <p className="text-base font-semibold text-color-4">
                            Sign up
                        </p>
                    </Link>
                </div>
            </form>
        </FormProvider>
    );
};

export default SigninForm;

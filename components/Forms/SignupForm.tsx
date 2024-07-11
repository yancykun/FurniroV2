'use client';

import { UserFormValidation } from '@/lib/validation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import CustomFormField from '../UI/CustomFormField';
import { FormFieldType } from '@/types/formFieldType';

const SignupForm = () => {
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    function onSubmit(values: z.infer<typeof UserFormValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full items-center justify-center"
            >
                <div className="grid items-center justify-center">
                    <h1 className=" mb-6 text-center text-lg font-bold text-color-7 md:text-xl lg:text-2xl">
                        Create an Account
                    </h1>

                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="yancygarret@gmail.com"
                        className="h-[40px] w-full sm:h-[50px] sm:w-[350px]"
                    />

                    <CustomFormField
                        fieldType={FormFieldType.PASSWORD}
                        control={form.control}
                        name="password"
                        label="Password"
                        className="h-[40px] w-full sm:h-[50px] sm:w-[350px]"
                    />
                </div>
            </form>
        </FormProvider>
    );
};

export default SignupForm;

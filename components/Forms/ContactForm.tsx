'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import CustomFormField from '../UI/CustomFormField';
import { FormFieldType } from '@/types';

const formSchema = z.object({
    username: z.string().min(2).max(50),
});

const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 flex flex-col items-center xl:items-start flex-1"
            >
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="yancygarret@gmail.com"
                    className="h-[75px] w-full sm:w-[528px]"
                />
            </form>
        </FormProvider>
    );
};

export default ContactForm;

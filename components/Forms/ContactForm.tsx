'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import CustomFormField from '../UI/CustomFormField';
import { FormFieldType } from '@/types';
import SubmitButton from '../UI/SubmitButton';
import { MessageValidation } from '@/lib/validation';
import { submitMessage } from '@/lib/actions/user.actions';
import { Alert, AlertTitle, AlertDescription } from '../UI/alert';

const ContactForm = () => {
    const form = useForm<z.infer<typeof MessageValidation>>({
        resolver: zodResolver(MessageValidation),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    });

    const {
        reset,
        setError,
        formState: { isSubmitting, isSubmitSuccessful, errors },
    } = form;

    const onSubmit = async ({
        name,
        email,
        subject = '',
        message,
    }: z.infer<typeof MessageValidation>) => {
        try {
            const userData = { name, email, subject, message };
            const response = await submitMessage(userData);

            if (!response.success) {
                setError('root', {
                    type: 'manual',
                    message: response.message,
                });
            } else {
                reset(); // Reset the form after successful submission
            }
        } catch (error) {
            console.error('Submit Message Error: ', error);
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
                className="space-y-6 flex flex-col items-center xl:items-start flex-1w"
            >
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="name"
                    label="Your name"
                    placeholder="Yancy Garret"
                    className="h-[75px] w-full sm:w-[528px]"
                />
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="yancygarret@gmail.com"
                    className="h-[75px] w-full sm:w-[528px]"
                />
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="subject"
                    label="Subject"
                    placeholder="This is an optional"
                    className="h-[75px] w-full sm:w-[528px]"
                />
                <CustomFormField
                    fieldType={FormFieldType.TEXTAREA}
                    control={form.control}
                    name="message"
                    label="Message"
                    placeholder="Hi, I'd like to ask about..."
                    className="w-full sm:w-[528px]"
                />

                {isSubmitSuccessful && (
                    <Alert className="h-[70px] w-full bg-green-800">
                        <AlertTitle className="text-color-1">
                            Success!
                        </AlertTitle>
                        <AlertDescription className="text-color-1">
                            Message sent successfully.
                        </AlertDescription>
                    </Alert>
                )}

                <SubmitButton
                    isLoading={isSubmitting}
                    white
                    className="rounded-md border capitalize"
                    type="submit"
                >
                    Submit
                </SubmitButton>

                {errors.root && (
                    <div className="text-red-800 font-semibold">
                        {errors.root.message}
                    </div>
                )}
            </form>
        </FormProvider>
    );
};

export default ContactForm;

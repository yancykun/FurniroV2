'use client';

import { CheckoutValidation } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import CustomFormField from '../UI/CustomFormField';
import { billingFormValues, FormFieldType } from '@/types';
import ProductBill from '../Billing/ProductBill';
import SubmitButton from '../UI/SubmitButton';
import { useCartStore } from '@/store/useCartStore';
import { submitBill } from '@/lib/actions/user.actions';
import { Alert, AlertTitle, AlertDescription } from '../UI/alert';

const BillingForm = () => {
    const form = useForm<z.infer<typeof CheckoutValidation>>({
        resolver: zodResolver(CheckoutValidation),
        defaultValues: {
            ...billingFormValues,
        },
    });

    const { clearCart } = useCartStore();

    const {
        reset,
        setError,
        formState: { isSubmitting, isSubmitSuccessful, errors },
    } = form;
    const { cart, getTotalPrice } = useCartStore();

    const onSubmit = async (values: z.infer<typeof CheckoutValidation>) => {
        const checkoutData = {
            ...values,
            cart,
            total: getTotalPrice().toFixed(2),
        };

        try {
            const response = await submitBill(checkoutData);

            if (!response.succcess) {
                setError('root', {
                    type: 'manual',
                    message: response.message,
                });
            } else {
                clearCart(); //Reset the cart after submitting it
                reset(); // Reset the form after successful submission
            }
        } catch (error) {
            console.error('Failed to submit order', error);
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
                className="flex flex-col  items-center justify-center gap-8 px-4 lg:flex-row lg:items-start"
            >
                <div className="grid w-full justify-center space-y-6 md:w-[600px]">
                    <h3 className=" mb-[2.35rem] text-2xl font-semibold md:text-3xl lg:text-4xl">
                        Billing details
                    </h3>

                    <div className="flex gap-2 sm:gap-6">
                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            control={form.control}
                            name="firstName"
                            label="First name"
                            placeholder="Yancy Garret"
                            className="h-[60px] w-[160px] sm:h-[75px] sm:w-[211px]"
                        />
                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            control={form.control}
                            name="lastName"
                            label="Last name"
                            placeholder="Saac"
                            className="h-[60px] w-[160px] sm:h-[75px] sm:w-[211px]"
                        />
                    </div>

                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="company"
                        label="Company Name (Optional)"
                        className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="country"
                        label="Country"
                        placeholder="Philippines"
                        className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="streetAddress"
                        label="Street Address"
                        placeholder="F. Cajelo st."
                        className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="city"
                        label="City"
                        placeholder="Davao City"
                        className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="province"
                        label="Province"
                        placeholder="Davao Del Sur"
                        className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.PHONE_INPUT}
                        control={form.control}
                        name="phone"
                        label="Phone"
                        className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="yancy.frontend@dev.com"
                        className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
                    />
                </div>

                <div className="w-full space-y-4 sm:w-[608px] sm:px-[2.35rem] sm:py-[3rem] py-[2rem]">
                    <ProductBill />

                    {isSubmitSuccessful && (
                        <Alert className="h-[70px] w-full bg-green-800">
                            <AlertTitle className="text-color-1">
                                Success!
                            </AlertTitle>
                            <AlertDescription className="text-color-1">
                                Order submitted successfully.
                            </AlertDescription>
                        </Alert>
                    )}

                    {errors.root && (
                        <Alert className="h-[70px] w-full bg-red-800">
                            <AlertTitle className="text-color-1">
                                Failed!
                            </AlertTitle>
                            <AlertDescription className="text-color-1">
                                {errors.root.message}
                            </AlertDescription>
                        </Alert>
                    )}

                    <div className="grid justify-center pt-6">
                        <SubmitButton
                            isLoading={isSubmitting}
                            white
                            type="submit"
                        >
                            Place order
                        </SubmitButton>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default BillingForm;

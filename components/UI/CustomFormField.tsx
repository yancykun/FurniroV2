'use client';

import { FormFieldType } from '@/types/';
import Image from 'next/image';
import { Control } from 'react-hook-form';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './form';
import { Input } from './input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Textarea } from './textarea';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { usePasswordVisibilityStore } from '@/store/usePasswordVisibilityStore';

interface CustomProps {
    control: Control<any>;
    fieldType: FormFieldType;
    name: string;
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
    const { fieldType, iconSrc, iconAlt, placeholder, className } = props;
    const { showPassword, togglePasswordVisibility } =
        usePasswordVisibilityStore();

    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className={`flex`}>
                    {iconSrc && (
                        <Image
                            src={iconSrc}
                            alt={iconAlt || 'icon'}
                            width={24}
                            height={24}
                            className="ml-2"
                        />
                    )}
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className={`rounded-lg border border-color-6 px-4 focus:border-2 focus:border-color-4 focus-visible:ring-0 ${className}`}
                        />
                    </FormControl>
                </div>
            );
        case FormFieldType.PASSWORD:
            return (
                <div className="relative flex">
                    <FormControl>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder={placeholder}
                            {...field}
                            className={`rounded-lg border border-color-6 px-4 focus:border-2 focus:border-color-4 focus-visible:ring-0 ${className}`}
                        />
                    </FormControl>
                    <div
                        className="absolute right-4 bottom-[18px] cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </div>
                </div>
            );
        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <Textarea
                        placeholder={placeholder}
                        {...field}
                        className={`rounded-lg border border-color-6 px-4 focus:border-2 focus:border-color-4 focus-visible:ring-0 ${className}`}
                    />
                </FormControl>
            );
        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput
                        defaultCountry="PH"
                        placeholder={placeholder}
                        international
                        withCountryCallingCode
                        value={field.value}
                        onChange={field.onChange}
                        className={`rounded-lg border border-color-6 px-4 focus:border-2 focus:border-color-4 focus-visible:ring-0 ${className}`}
                    />
                </FormControl>
            );

        default:
            break;
    }
};

const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, name, label } = props;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {fieldType !== FormFieldType.SELECT && label && (
                        <FormLabel className="font-medium text-base">
                            {label}
                        </FormLabel>
                    )}

                    <RenderField field={field} props={props} />

                    <FormMessage className="font-semibold text-red-800" />
                </FormItem>
            )}
        />
    );
};

export default CustomFormField;

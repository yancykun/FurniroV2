import type { Config } from 'tailwindcss';

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                color: {
                    1: '#FFFFFF',
                    2: '#FFF3E3',
                    3: '#F4F5F7',
                    4: '#B88E2F',
                    5: '#333333',
                    6: '#666666',
                    7: '#101415',
                    8: '#D8D8D8',
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;

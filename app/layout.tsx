import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout/Layout';
import TanstackQueryClientProvider from '@/components/TanstackQueryClientProvider/QueryClientProvider';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
    title: 'Furniro',
    description: 'Furniture ecommerce app',
    icons: './assets/images/logo.png',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <TanstackQueryClientProvider>
                    <Layout>{children}</Layout>
                </TanstackQueryClientProvider>
            </body>
        </html>
    );
}

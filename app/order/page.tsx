import Features from '@/components/Features/Features';
import Section from '@/components/Layout/Section';
import ProductOrderDetail from '@/components/ProductOrder/ProductOrderDetail';

const OrderPage = () => {
    return (
        <Section>
            <ProductOrderDetail />
            <Features />
        </Section>
    );
};

export default OrderPage;

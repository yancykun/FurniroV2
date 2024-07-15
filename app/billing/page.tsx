import Billing from '@/components/Billing/Billing';
import Features from '@/components/Features/Features';
import ExtendedHeader from '@/components/Header/ExtendedHeader';
import Section from '@/components/Layout/Section';

const BillingPage = () => {
    return (
        <Section>
            <ExtendedHeader customTitle="Billing" customSubtitle="Billing" />
            <Billing />
            <Features />
        </Section>
    );
};

export default BillingPage;

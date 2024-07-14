import Contact from '@/components/Contact/Contact';
import Features from '@/components/Features/Features';
import ExtendedHeader from '@/components/Header/ExtendedHeader';

const ContactPage = () => {
    return (
        <div>
            <ExtendedHeader customTitle="Contact" customSubtitle="Contact" />
            <Contact />
            <Features />
        </div>
    );
};

export default ContactPage;

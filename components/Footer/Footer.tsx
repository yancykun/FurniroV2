import FooterText from './FooterText';
import FooterLinks from './FooterLinks';
import FooterNewsLetter from './FooterNewsLetter';
import FooterRights from './FooterRights';
import Section from '../Layout/Section';

const Footer = () => {
    return (
        <Section customMargin="my-[60px]">
            <div className="flex flex-col items-center border-b-2 border-t-2 py-10 lg:flex-row lg:items-start lg:justify-between lg:px-[100px]">
                <FooterText />
                <div className="mt-[40px] flex flex-col lg:mt-0 lg:w-2/3 lg:flex-row lg:justify-between lg:gap-10">
                    <FooterLinks />
                    <FooterNewsLetter />
                </div>
            </div>
            <FooterRights />
        </Section>
    );
};

export default Footer;

import { contactDetails } from '@/constants';
import Image from 'next/image';

const ContactDetails = () => {
    return (
        <div className="flex w-full flex-col items-center gap-12 xl:ml-10 xl:items-start">
            {contactDetails.map((detail) => (
                <div className="flex gap-6" key={detail.id}>
                    <Image
                        className="h-[23px] w-[23px]"
                        src={detail.image}
                        alt="Contact image"
                        width={23}
                        height={23}
                    />

                    <div>
                        <h5 className="text-2xl font-medium">{detail.title}</h5>
                        {detail.text && (
                            <p className="w-[212px] text-base">{detail.text}</p>
                        )}
                        {detail.mobile && (
                            <p className="w-[212px] text-base">
                                {detail.mobile}
                            </p>
                        )}
                        {detail.hotline && (
                            <p className="w-[212px] text-base">
                                {detail.hotline}
                            </p>
                        )}
                        {detail.weekends && (
                            <p className="w-[212px] text-base">
                                {detail.weekends}
                            </p>
                        )}
                        {detail.weekdays && (
                            <p className="w-[212px] text-base">
                                {detail.weekdays}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactDetails;

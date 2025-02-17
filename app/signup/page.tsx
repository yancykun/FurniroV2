import SignupForm from '@/components/Forms/SignupForm';
import Logo from '@/components/Header/Logo';
import Image from 'next/image';

const Signup = () => {
    return (
        <div className="h-screen max-h-screen flex">
            <section className="container my-auto">
                <div className="sub-container max-w-[496px]">
                    <div className="mb-10">
                        <Logo />
                    </div>

                    <SignupForm />

                    <p className="text-sm mt-10 font-medium">© 2024 Furino.</p>
                </div>
            </section>
            <Image
                className="side-img max-w-[50%]"
                src="/assets/images/signupImage.jpg"
                alt="furniture"
                width={1000}
                height={1000}
            />
        </div>
    );
};

export default Signup;

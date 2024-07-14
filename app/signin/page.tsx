import SigninForm from '@/components/Forms/SignInForm';
import Logo from '@/components/Header/Logo';
import Image from 'next/image';

const Signin = () => {
    return (
        <div className="h-screen max-h-screen flex">
            <section className="container my-auto">
                <div className="sub-container max-w-[496px]">
                    <div className="mb-10">
                        <Logo />
                    </div>

                    <SigninForm />

                    <p className="text-sm mt-10 font-medium">© 2024 Furino.</p>
                </div>
            </section>
            <Image
                className="side-img max-w-[50%]"
                src="/assets/images/signinImage.jpg"
                alt="furniture"
                width={1000}
                height={1000}
            />
        </div>
    );
};

export default Signin;

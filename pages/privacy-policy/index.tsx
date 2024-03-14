import Head from "next/head";
import Link from "next/link";

const PrivacyPage = () => {

    return (
        <div className="overflow-hidden px-3 md:px-6 lg:px-10">
            <Head>
                <title>Privacy Policy | Laszlo Pecsi Art Collection</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full max-w-[1240px] lg:mx-auto my-8 md:my-12 lg:my-24 z-0 bg-background">
                <h1 className="font-header font-semibold text-3xl lg:text-4xl text-center mb-4 md:mb-6 lg:mb-8">Privacy Policy</h1>
                <p className="font-body text-base md:text-lg lg:text-xl mx-auto mb-4 md:mb-6 lg:mb-8">
                    <span className="font-semibold">Last Updated: </span>26 February 2024
                    <br /><br />
                    Welcome to the Website of the Art Collection of Laszlo Pecsi! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect the personal information you provide to us.
                    <br /><br />
                    <span className="font-semibold">Information Collection and Use</span>
                    <br /><br />
                    We collect personal information through our contact form. This information includes your name and email address, which you voluntarily provide when you wish to contact us for inquiries or support.
                    <br /><br />
                    The purpose of collecting this information is to:
                    <br /><br />
                    - Respond to your inquiries or support requests
                    <br />
                    - Communicate with you directly
                    <br /><br />
                    <span className="font-semibold">How We Handle Your Data</span>
                    <br /><br />
                    When you submit a message through our contact form, we do not store your personal data in our system. Instead, your name, email address, and message are immediately converted into an email and sent directly to our customer support team for a response.
                    <br /><br />
                    We do not use your personal data for marketing purposes, nor do we share, sell, rent, or trade your information with third parties for their promotional purposes.
                    <br /> <br />
                    <span className="font-semibold">Data Security</span>
                    <br /><br />
                    We are committed to ensuring the security of your personal information. While we strive to use commercially acceptable means to protect your personal data, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
                    <br /> <br />
                    <span className="font-semibold">Your Rights</span>
                    <br /><br />
                    You have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please <Link href='/contact' target="_blank" className="text-primaryOrange underline hover:text-[#DC2F02] duration-150 transition-all">Contact us</Link>.
                    <br /><br />
                    <span className="font-semibold">Changes to Our Privacy Policy</span>
                    <br /><br />
                    We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons.
                    <br /><br />
                    <span className="font-semibold">Contact Us</span>
                    <br /><br />
                    If you have any questions about our privacy practices or would like to know more, please  <Link href='/contact' target="_blank" className="text-primaryOrange underline hover:text-[#DC2F02] duration-150 transition-all">Contact us</Link>.
                </p>
            </div>
        </div>
    );

};

export default PrivacyPage;
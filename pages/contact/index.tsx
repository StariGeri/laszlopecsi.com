import ContactForm from "@/components/contact/ContactForm";
import Divider from "@/components/contact/Divider";
import OtherContacts from "@/components/contact/OtherContacts";

import Head from "next/head";

export default function ContactPage() {

    return (
        <div className="px-3 md:px-6 lg:px-10">
            <div className="w-full max-w-[1240px] h-fit lg:mx-auto my-8 md:my-12 lg:my-16 flex flex-col sm:flex-row sm:justify-between items-center gap-4 lg:gap-5 z-0 bg-background">
                <Head>
                    <title>Contact Us | Laszlo Pecsi Art Collection</title>
                    <meta name="description" content="Get in touch with us for any inquiries, questions or feedback." />
                    <meta property="og:image" content="/assets/images/artistabout.png" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <ContactForm />
                <Divider />
                <OtherContacts />
            </div>
        </div>
    );
}
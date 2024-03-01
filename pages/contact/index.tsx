import ContactForm from "@/components/contact/ContactForm";
import Divider from "@/components/contact/Divider";
import OtherContacts from "@/components/contact/OtherContacts";

export default function ContactPage() {

    return (
        <div className="px-3 md:px-6 lg:px-10">
            <div className="w-full max-w-[1240px] h-fit lg:mx-auto my-8 md:my-12 lg:my-16 flex flex-col sm:flex-row sm:justify-between items-center gap-4 lg:gap-5 z-0 bg-background">
                <ContactForm />
                <Divider />
                <OtherContacts />
            </div>
        </div>
    );
}
// Dependencies
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormDataType {
    name: string;
    email: string;
    subject: string;
    message: string;
    privacyPolicy: boolean;
}

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormDataType>({
        mode: 'onChange',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const onSubmit = async (data: FormDataType) => {
        // Call the API to send the email
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setIsSubmitted(true);
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 3000);
        } else {
            // Handle error
            console.log('Error sending email');
        }
    };

    useEffect(() => {
        if (isSubmitted) {
            // reset the form
            setIsSubmitted(false);
            reset();
        }
    }, [isSubmitted]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4">
                <div className="mb-4">
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        placeholder="Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        placeholder="Email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        {...register("subject", { required: "Subject is required" })}
                        placeholder="Subject"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="">
                    <textarea
                        {...register("message", { required: "Message is required" })}
                        placeholder="Your message"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                {errors.email || errors.name || errors.subject || errors.message ? (
                    <p className="text-primaryRed text-sm md:text-base">Please fill out all required fields</p>
                )
                    : <></>
                }

                <div className="my-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            {...register("privacyPolicy", { required: "You must accept the privacy policy" })}
                            className="form-checkbox h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">I accept the <a href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</a></span>
                    </label>
                </div>
                {errors.privacyPolicy ? (
                    <p className="text-primaryRed text-sm md:text-base">You must accept the privacy policy</p>
                )
                    : <></>
                }

                <div className="mt-2 mb-4">
                    <button type="submit" disabled={!isValid} className="w-full bg-blue-500 text-white py-2 px-4">
                        Send Email
                    </button>
                </div>
            </form>
            {showSuccessMessage && (
                <div className="fixed w-full bottom-0 left-0 overflow-hidden mt-3 px-4 py-2 bg-green-100 text-primaryGreen rounded-md border text-center transition-opacity duration-1000 ease-out opacity-100">
                    Email sent successfully!
                </div>
            )}
        </>
    );
};

export default ContactForm;

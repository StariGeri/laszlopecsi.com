// Dependencies
import React from 'react';
import { useForm } from 'react-hook-form';

interface FormDataType {
    name: string;
    email: string;
    subject: string;
    message: string;
    privacyPolicy: boolean;
}

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormDataType>({
        mode: 'onChange',
    });

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
            // Handle success
            console.log('Email sent successfully');
        } else {
            // Handle error
            console.log('Error sending email');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4">
            <div className="mb-4">
                <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
                <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    {...register("subject", { required: "Subject is required" })}
                    placeholder="Subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
            </div>

            <div className="mb-4">
                <textarea
                    {...register("message", { required: "Message is required" })}
                    placeholder="Your message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <div className="mb-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        {...register("privacyPolicy", { required: "You must accept the privacy policy" })}
                        className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">I accept the <a href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</a></span>
                </label>
                {errors.privacyPolicy && <p className="text-red-500 text-xs mt-1">{errors.privacyPolicy.message}</p>}
            </div>

            <div className="mb-4">
                <button type="submit" disabled={!isValid} className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50">
                    Send Email
                </button>
            </div>
        </form>
    );
};

export default ContactForm;

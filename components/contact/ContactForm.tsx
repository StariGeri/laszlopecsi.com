// Dependencies
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Icons
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

// hooks
import { useContactForm } from '@/hooks/useContactForm';


const ContactForm = () => {

    const { register, handleSubmit, errors, showSuccessMessage, onSubmit, isValid } = useContactForm();

    return (
        <div className='flex flex-col w-full sm:w-2/3 p-2 md:p-4 lg:p-6'>
            <h1 className="w-fit font-header font-semibold text-[26px] md:text-[35px] lg:text-[40px] sm:mb-2">Contact Us</h1>
            <p className='text-lg md:text-xl lg:text-[22px] font-body mb-2'>Get in touch and let us know how we can help</p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:my-4">
                <div className="w-full flex items-center gap-2 md:gap-4 lg:gap-6 mb-2 md:mb-4 lg:mb-6">
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        placeholder="Name"
                        className="w-full bg-white sm:w-1/2 px-3 py-2 border-b-2 border-b-gray-300 focus:outline-none focus:border-b-black placeholder:font-body"
                    />
                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        placeholder="Email"
                        className="w-full bg-white sm:w-1/2 px-3 py-2 border-b-2 border-b-gray-300 focus:outline-none focus:border-b-black placeholder:font-body"
                    />
                </div>
                <div className="w-full mb-2 md:mb-4 lg:md-6">
                    <input
                        type="text"
                        {...register("subject", { required: "Subject is required" })}
                        placeholder="Subject"
                        className="w-full bg-white px-3 py-2 border-b-2 border-b-gray-300 focus:outline-none focus:border-b-black placeholder:font-body"
                    />
                </div>
                <div className="w-full mb-2 md:mb-4">
                    <textarea
                        {...register("message", { required: "Message is required" })}
                        placeholder="Your message"
                        className="w-full bg-white resize-none h-40 px-3 py-2 border-b-2 border-b-gray-300 focus:outline-none focus:border-b-black placeholder:font-body"
                    />
                </div>
                {errors.email || errors.name || errors.subject || errors.message ? (
                    <p className="text-primaryRed font-body text-sm md:text-base h-8">Please fill out all required fields</p>
                ) : <></>}

                <div className="w-full flex justify-between items-center gap-2 md:gap-4 my-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            {...register("privacyPolicy", { required: "You must accept the privacy policy" })}
                            className="rounded-sm border-black w-4 h-4  md:w-5 md:h-5 accent-primaryOrange"
                        />
                        <span className="ml-2 font-body">I accept the <Link href="/privacy-policy" target='_blank' className="text-primaryOrange hover:underline font-body">privacy policy</Link></span>
                    </label>
                    <button
                        type="submit"
                        disabled={!isValid}
                        className='flex items-center gap-2 border-[1.4px] border-opacity-60 border-slate-900 px-4 py-[6px] group'>
                        <p className='text-black font-semibold lg:font-bold text-[18px] md:text-[20px] font-body'>Send</p>
                        <HiOutlineArrowNarrowRight className="text-primaryOrange transition-transform duration-150 group-hover:translate-x-1 stroke-[2px] w-8 h-5" />
                    </button>
                </div>
                {
                    errors.privacyPolicy ? (
                        <p className="text-primaryRed text-sm md:text-base h-8">You must accept the privacy policy</p>
                    ) : <></>
                }
            </form >
            {showSuccessMessage && (
                <div className="fixed w-full bottom-0 left-0 overflow-hidden mt-3 px-4 py-2 bg-green-100 text-primaryGreen rounded-md border text-center transition-opacity duration-1000 ease-out opacity-100">
                    Email sent successfully!
                </div>
            )}
        </div >
    );
};

export default ContactForm;

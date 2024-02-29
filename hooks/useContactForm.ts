import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface FormDataType {
  name: string;
  email: string;
  subject: string;
  message: string;
  privacyPolicy: boolean;
}

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormDataType>({
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
      setIsSubmitted(false);
      // reset the form
      reset();
    }
  }, [isSubmitted]);

  return { register, handleSubmit, errors, showSuccessMessage, onSubmit, isValid };
};

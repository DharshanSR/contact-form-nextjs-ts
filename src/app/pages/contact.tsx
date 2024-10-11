import React from 'react';
import ContactForm from '@/app/components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
       <h1 className="text-2xl font-bold">Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;

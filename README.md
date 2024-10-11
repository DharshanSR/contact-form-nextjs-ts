# Contact Form with Next.js and TypeScript

This project is a contact form built with Next.js, TypeScript, and various tools for form validation, backend email handling, and rate limiting. The goal is to create a functional and secure contact form that can be used in a portfolio or website.

## Features

- **Frontend:** Built with Next.js (TypeScript) using React Hook Form and Yup for form validation.
- **Backend:** Uses Nodemailer for email functionality and rate limit validation to prevent spam.
- **Validation:** Form data is validated with Zod and Yup to ensure the inputs are correct before submission.

## Technologies Used

- **Next.js**: For server-side rendering and building the application.
- **TypeScript**: For static typing in JavaScript.
- **Nodemailer**: For sending emails from the server.
- **Zod**: For schema validation on the backend.
- **React Hook Form**: For managing form state and handling validations on the frontend.
- **Yup**: For form validation on the frontend.
- **Rate-Limit Validator**: To implement rate limiting to avoid spam submissions.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DharshanSR/contact-form-nextjs-ts.git
   cd contact-form-nextjs-ts

2. Install dependencies:
    ```bash
    npm install

3. Set up environment variables:
Create a .env.local file in the root of the project and add your email configuration (for Nodemailer):
```bash
    MAIL_USER=your-email.com
    GMAIL_PASS=app-password
    RECIPIENT_EMAIL=your-email.com
#   c o n t a c t - f o r m - n e x t j s - t s  
 

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
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root of the project and add the following configurations:

   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=app-password
   RECIPIENT_EMAIL=your-email.com
   ```

   - `GMAIL_USER`: Your Gmail address.
   - `GMAIL_PASS`: An app-specific password generated in your Google account. (Ensure two-factor authentication is enabled on your account.)
   - `RECIPIENT_EMAIL`: The email address where you want to receive the form submissions.

### Running the Project

To start the development server, run:

```bash
npm run dev
```

This will run the app on `http://localhost:3000`.

### Usage

1. Go to the **Contact Me** section of the application.
2. Fill out the form with your name, email, and message.
3. Upon form submission, the data will be validated and an email will be sent to the recipient configured in the `.env.local` file.

### Folder Structure

```bash
.
├── public          # Static files like images
├── pages           # Next.js pages, includes the form page and API route for handling form submissions
├── components      # Reusable components like the form
├── utils           # Helper functions for validation and rate limiting
├── styles          # Custom CSS and styles
└── README.md       # Project documentation
```

### Environment Variables

Ensure you have the following variables set in your `.env.local` file:

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=app-password
RECIPIENT_EMAIL=your-email.com
```

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License

[MIT](LICENSE)

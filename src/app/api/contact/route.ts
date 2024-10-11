import nodemailer from 'nodemailer';

// Named export for POST method
export async function POST(req: Request) {
  const { name, email, message, mobile } = await req.json(); // Add mobile to destructured values

  if (!name || !email || !message || !mobile) { // Check for mobile in the validation
    return new Response(JSON.stringify({ message: 'All fields are required.' }), { status: 400 });
  }

  // Nodemailer transport configuration
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER, // your Gmail address
      pass: process.env.GMAIL_PASS, // your Gmail App Password
    },
  });

  // Create a unique subject
  const timestamp = new Date().toISOString();
  const subject = `New Contact Form Submission from ${name} on ${timestamp}`;

  // Styled HTML email structure
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; border: 1px solid #ccc; border-radius: 10px; background-color: #e0f7fa; max-width: 600px; margin: auto;">
      <h2 style="color: #4A90E2; text-align: center;">👋 New Contact Form Submission</h2>
      <hr style="border: 1px solid #4A90E2;" />
      <div style="margin: 20px 0; text-align: center;">
        <p style="font-size: 18px; margin: 0;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 18px; margin: 0;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 18px; margin: 0;"><strong>Mobile:</strong> ${mobile}</p> <!-- Added mobile number -->
        <p style="font-size: 18px; margin: 0;"><strong>Message:</strong></p>
        <p style="background-color: #ffffff; padding: 10px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); max-width: 500px; margin: auto;">${message}</p>
      </div>
      <footer style="text-align: center; margin-top: 20px;">
        <p style="color: #888888; font-size: 14px;">This email was sent from your contact form on your website.</p>
      </footer>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.RECIPIENT_EMAIL, // where the email is sent
      subject: subject,
      text: message, // Plain text version of the message
      html: htmlContent,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}

// Dependencies
import type { NextApiRequest, NextApiResponse } from 'next';

// 3rd party libraries
import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('reached the sendEmail API');

  const createEmailTemplate = (name: string, email: string, subject: string, message: string) => {
    return `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 0; padding: 20px; color: #333;">
            <div style="max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
              <header style="background-color: #D4A373; color: white; padding: 10px 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">New Message Received</h1>
              </header>
              <div style="padding: 20px;">
                <p style="font-size: 18px; margin: 0 0 10px 0;"><strong>From:</strong> ${name}</p>
                <p style="font-size: 18px; margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #D4A373;">${email}</a></p>
                <p style="font-size: 18px; margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
                <div style="background-color: #f8f8f8; padding: 15px; margin: 20px 0; border-left: 4px solid #D4A373;">
                  <p style="font-size: 16px; margin: 0;"><strong>Message:</strong></p>
                  <p style="font-size: 16px;">${message}</p>
                </div>
              </div>
              <footer style="background-color: #f2f2f2; text-align: center; padding: 10px 20px;">
                <p style="font-size: 14px; margin: 0;">This email was sent from laszlopecsi.com's contact form.</p>
              </footer>
            </div>
          </div>
        `;
  };

  try {
    if (req.method === 'POST') {
      console.log('inside the if statement!');
      const { name, email, subject, message } = req.body;

      const sanitizedName = sanitizeHtml(name);
      const sanitizedEmail = sanitizeHtml(email);
      const sanitizedSubject = sanitizeHtml(subject);
      const sanitizedMessage = sanitizeHtml(message);

      // Configure nodemailer transport
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        debug: true,
        logger: true,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL_USER,
          pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
        },
      });

      console.log('transporter: ', transporter);

      const mailOptions = {
        from: `${process.env.NEXT_PUBLIC_EMAIL_USER}`, // Sender address: your own email
        to: `${process.env.NEXT_PUBLIC_EMAIL_USER}`, // List of receivers: your own email
        replyTo: sanitizedEmail, // Reply-to address set to the user's email
        subject: `Inquiry through website: ${sanitizedSubject}`, // Subject line
        html: createEmailTemplate(sanitizedName, sanitizedEmail, sanitizedSubject, sanitizedMessage), // HTML body
      };

      console.log('mailOptions: ', mailOptions);

      try {
        console.log('trying to send the email');
        await transporter.sendMail(mailOptions);
        console.log('email sent successfully');
        res.status(200).json({ message: 'Email sent successfully' });
      } catch (error) {
        res.status(500).json({ error: error });
        console.log(error);
      }
    } else {
      // Handle any non-POST requests
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

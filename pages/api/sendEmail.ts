// Dependencies
import type { NextApiRequest, NextApiResponse } from 'next';

// 3rd party libraries
import sanitizeHtml from 'sanitize-html';
import { CourierClient } from '@trycourier/courier';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedSubject = sanitizeHtml(subject);
    const sanitizedMessage = sanitizeHtml(message);

    const courier = new CourierClient({ authorizationToken: process.env.NEXT_PUBLIC_COURIER_API_KEY });

    try {
      const { requestId } = await courier.send({
        message: {
          to: {
            email: 'laszlopecsicollection@gmail.com',
          },
          template: 'Z85M4HS9MHMP58J906CK1QP5QEV9',
          data: {
            name: sanitizedName,
            email: sanitizedEmail,
            subject: sanitizedSubject,
            message: sanitizedMessage,
          },
        },
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

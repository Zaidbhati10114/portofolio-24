import ContactFormEmail from "@/email/contact-form-email";
import { render } from "@react-email/render";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
        return new Response(null, { headers });
    }
    try {
        const { email, message } = await request.json();

        const { data, error } = await resend.emails.send({
            from: "noreply@zaidbhati.tech",
            to: [email],
            subject: "Thank you for contacting me",
            html: render(ContactFormEmail({ message: message, email: email })),
        });

        if (error) {

            return new Response(JSON.stringify({ error: 'Failed to send email' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {

        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { senderEmail, message } = await req.json();

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return NextResponse.json({ error: "Invalid sender email" }, { status: 400 });
    }
    if (!validateString(message, 5000)) {
        return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    try {
        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["zaidbhati007@gmail.com"],
            subject: "Message from contact form",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: getErrorMessage(error) }, { status: 500 });
    }
}

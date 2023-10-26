'use server';

import ConctactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const email = formData.get('email');
    const message = formData.get('message');

    if (!validateString(email, 100)) {
        return {
            error: 'Invalid email',
        };
    }

    if (!validateString(message, 500)) {
        return {
            error: 'Invalid Message',
        };
    }

    let data;
    try {
        data = resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'adheramafebrianto@gmail.com',
            subject: `Message From Portfolio Contact Form`,
            reply_to: email as string,
            // text: message as string,
            react: React.createElement(ConctactFormEmail, { message: message as string, senderEmail: email as string }),
        });

    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return { data };
}
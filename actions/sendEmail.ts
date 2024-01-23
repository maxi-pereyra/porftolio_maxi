"use server";

import React from "react";
import { Resend } from "resend";
import contactFormEmail from "@/app/emal/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown , maxLength: number) => {
    if(!value|| typeof value  !== "string" || value.length > maxLength){
        return false;
    }
    return true
}
export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('sendEmail');
    const message = formData.get('message');

    if ( !validateString(senderEmail , 500)){
        return {
            error: " invalid sender email"
        }
    }
    
    if ( !validateString(message , 500)){
        return {
            error: " invalid message"
        }
    }

    try {
        await resend.emails.send({
            from: "Contact From <onboarding@resend.dev>" ,
            to: "maxi.22climb@gmail.com",
            subject: "message from contact form",
            reply_to: senderEmail as string,
            //text : message as string
            react : React.createElement(contactFormEmail, {
                message:message as string,
                senderEmail: senderEmail as string,
            })
        })
        
    } catch (error: any) {
   
        return {
            error: error.message
        }
        
    }
}   
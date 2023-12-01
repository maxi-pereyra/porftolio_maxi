import { NextResponse } from "next/server";

export async function POST (req : Request) {
    
    const body = await req.json();
    console.log(body);
    //send to email to admin with contact from data

    const nodemailer = require ('nodemailer');
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user: 'maxi.22climb@gmail.com',
            pass: 'wyluyaxoebhysiga'
        }
    })

    const mailOption = {
        from: body.email,
        to: 'maxi.22climb@gmail.com',
        subject: 'contact form submission',
        text: 'Name' + body.name + '\nemail: ' + body.emial + '\nmessage: ' + body.message
    }

    transporter.sendMail(mailOption , function(error: any , info: any){
        if(error) {
             console.log(error);
        }else {
            console.log('Email sent: ' + info.response);
        }

    })

    return NextResponse.json({message: ' Email sent successfuly'});
}
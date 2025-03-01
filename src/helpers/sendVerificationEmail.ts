import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";

import { IApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username: string,
    verifyCode: string
):Promise<IApiResponse>{
    try{
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: "Mystery Message Verification Code",
            react: VerificationEmail({ username, otp: verifyCode })
        });
        return {
            success: true,
            message: "Verification email sent"
        }
    }catch(err){
        console.error("Error sending verification email: ", err);
        return {
            success: false,
            message: "Failed to send verification email"
        }
    }
}
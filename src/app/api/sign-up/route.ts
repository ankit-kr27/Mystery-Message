import { sendVerificationEmail } from '@/helpers/sendVerificationEmail';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User.model';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    await dbConnect();
    try {
        const {username, email, password} = await request.json();
        const existingUserVerifiedByUsername =  UserModel.findOne({username, isVerified:true})
    } catch (err) {
        console.error('Error signing up: ', err);
        return Response.json(
            {
                success: false,
                message: 'Error signing up. Please try again later.',
            },
            {
                status: 500,
            }
        );
    }
}

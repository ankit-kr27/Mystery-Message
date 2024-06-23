import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
    content: string; // TS type
    createdAt: Date;
}

const MessageSchema: Schema<IMessage> = new Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
});

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: IMessage[];
}

const UserSchema: Schema<IUser> = new Schema({
    username: { 
        type: String, 
        required: [true, 'Username is required'], 
        trim: true, 
        unique: true 
    },
    email: { 
        type: String, 
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'] 
    },
    password: { 
        type: String, 
        required: [true, 'Password is required'], 
    },
    verifyCode: { 
        type: String, 
        required: [true, 'Verify code is required'], 
    },
    verifyCodeExpiry: { 
        type: Date, required: [true, 'Verify code expiry is required'] 
    },
    isVerified: { 
        type: Boolean,
        default: false 
    },
    isAcceptingMessage: { 
        type: Boolean,
        default: true 
    },
    messages: [MessageSchema],
});

const UserModel = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>('User', UserSchema);
// we writie this line to avoid the error of redefining the model if it already exists because of hot reloading which is a feature of Next.js that allows us to see the changes in real-time without restarting the server. In this case, we are checking if the model already exists in the database, we will use it, otherwise, we will create a new model.

export default UserModel;
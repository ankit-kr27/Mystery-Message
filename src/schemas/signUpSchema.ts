import {z} from 'zod';

export const userNameValidation = z
    .string()
    .min(3, "Username must be of atleast 2 characters")
    .max(20, "Username must be of atmost 20 characters")
    .regex(/^[A-Za-z0-9_]+$/, "Username must contain only alphabets and numbers");

export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be atleast 8 characters"),
});
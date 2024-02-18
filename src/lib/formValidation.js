import { z } from 'zod';
 
export const contactFormSchema = z.object({
    email: z
        .string({ required_error: 'Don’t forget to enter your email address!' })
        .email({message: 'Check your email address.'})
        .min(10, "Your is e-mail to short")
        .max(64, {message: "Your e-mail is too long"})
        .trim(),
    message: z
        .string({ required_error: 'Don’t forget to leave a message!' })
        .min(1, 'Don’t forget to leave a message!')
        .max(1024, 'That’s a long message, try getting to the point quicker!')
});
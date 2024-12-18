import z from "zod";

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
})


export const createBlogInput = z.object({
    title: z.string().email(),
    content: z.string(),
})

export const udpateBlogInput = z.object({
    title: z.string().email(),
    content: z.string(),
    id: z.number()
})


export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type createBlogInput = z.infer<typeof createBlogInput>
export type udpateBlogInput = z.infer<typeof createBlogInput>


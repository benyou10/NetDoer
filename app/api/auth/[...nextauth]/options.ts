import type { NextAuthOptions } from "next-auth";
import  GithubProvider  from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const options : NextAuthOptions ={
    providers : [
        GithubProvider({
            clientId : process.env.GITHUB_ID as string,
            clientSecret: process.env.GITGUB_SECRET as string,
        }),
        CredentialsProvider({
            name :'credentials',
            credentials : {
                username : {
                    label : "username:",
                    type :'text',
                    placeholder:'your-cool-username'

                },
            },
            async authorize(credentials){
const user={id :'542',name :"dave",password:'password'}
if(credentials?username === user.name && credentials?.password === user.password
        })
    ],
    pages: {
        signIn: '/authontication/signin',
        signOut: '/authontication/signout',
        error: '/authontication/error', // Error code passed in query string as ?error=
       verifyRequest: '/authontication/verify-request', // (used for check email message)
    newUser: '/authonticationauth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)

    
  }}
import { signIn } from "@/services/auth";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const MINUTE = 60;
const HOUR = 60 * MINUTE;

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        const { user, token, error } = await signIn({ username, password });
        if (user) {
          console.log(user)
          return {
            id: user.id,
            jwt: token,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
          };
        } else {
          throw new Error(error);
        }
      },
    }),
  ],
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  session: {
    maxAge: +(process.env.NEXT_PUBLIC_SESSION_MAX_AGE_HOURS || 1) * HOUR,
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = +user.id;
        token.jwt = user.jwt;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user.id = token.id;
      session.jwt = token.jwt;
      session.user.name = token.name;
      session.user.email = token.email;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    jwt: string;
    user: User;
  }
  interface User {
    id: number;
    jwt: string;
    name: string;
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    jwt: string;
    name: string;
    email: string;
  }
}

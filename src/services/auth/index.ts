import { post } from "@/lib/http/fetch-wrapper";
import { AuthResponse } from "@/types/interface";

type User =
  | { user: any; token: string; error: never }
  | { error: string; user: never; token: never };

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function signIn({ username = "", password = "" }) {
  const response = await post<{ username: string; password: string }, AuthResponse>(
    `${baseUrl}/auth/login`,
    {username, password }
  );

  if (response.status !== 200) {
    return {
      error: "Invalid email or password",
    } as unknown as User;
  }

  const { token } = response.data

  const user: User = {
    user: {
      id: token.id,
      firstName: token.firstName,
      lastName: token.lastName,
      email: token.email
    },
    token: token.token
  } as unknown as User


  return {
    ...user
  };
}

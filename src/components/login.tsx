"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Wrapper,
  Text,
} from "@/components/ui";
import nProgress from "nprogress";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  const callbackUrl = searchParams.get("callbackUrl") || "/inventory";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    nProgress.start();
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        username: user.username,
        password: user.password,
        redirect: false,
      });
      if (!result?.ok) {
        throw new Error(
          result?.error || "Invalid email or password. Please try again."
        );
      }
      router.push(callbackUrl);
      return;
    } catch (error) {
      toast.error("Failed to login", {
        description: (error as Error)?.message,
      });
      nProgress.done();
      setLoading(false);
    }
  };
  return (
    <Container className="grid h-screen items-center justify-center">
      <Box className="min-w-[100vw]">
        <Box className="mx-auto w-full max-w-md">
          <Wrapper className="mx-auto w-full max-w-md">
            <Wrapper.Body className="py-10">
              <Flex direction="column" align="center" className="mb-12">
                <Text
                  as="h1"
                  fontSize="3xl"
                  fontWeight="medium"
                  align="center"
                  className="mt-6 mb-3"
                >
                  Ilara EMR Inventory
                </Text>
                <Text align="center" color="muted">
                  Log into your inventory account
                </Text>
              </Flex>
              <form onSubmit={handleSubmit}>
                <Input
                  label="Email"
                  type="email"
                  onChange={handleChange}
                  autoFocus
                  value={user.username}
                  required
                  name="username"
                  placeholder="e.g john@fin.africa"
                  className="mb-6 h-10"
                />
                <Input
                  label="Password"
                  onChange={handleChange}
                  required
                  name="password"
                  type="password"
                  className="mb-6 h-10"
                  value={user.password}
                />
                <Button
                  loading={loading}
                  loadingText="Logging in..."
                  type="submit"
                  align="center"
                  fullWidth
                >
                  Login
                </Button>
              </form>
            </Wrapper.Body>
          </Wrapper>
          <Text color="muted" className="mt-3 pl-[1px] text-[90%]">
            &copy; {new Date().getFullYear()} &bull; Powered by Ilara &bull;
            All Rights Reserved.
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

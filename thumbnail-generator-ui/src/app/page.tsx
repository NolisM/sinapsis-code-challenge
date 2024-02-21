'use client';
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginButton, LoginContainer } from "../style/login";
import { Title } from "@/style/title";


export default function Login() {
  const { user, error, isLoading } = useUser()

  return (
    <LoginContainer>
      <Title>Welcome to the Thumbnail Generator</Title>
      <LoginButton href="/api/auth/login">Login</LoginButton>;
    </LoginContainer>
  )
}


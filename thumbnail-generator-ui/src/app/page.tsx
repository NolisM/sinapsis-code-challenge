'use client';
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginContainer } from "../style/login";

import { LoginLogout } from "@/components/login-logout";


export default function Login() {
  const { user, error, isLoading } = useUser()

  return (
    <LoginContainer>

      <LoginLogout />
    </LoginContainer>
  )
}


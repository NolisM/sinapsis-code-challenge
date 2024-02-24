import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginButton, LogoutButton } from "@/style/login";
import { Loader } from "@/style/loader";
import { Title } from "@/style/title";
import Generator from "./generator";

export const LoginLogout = () => {
  const { user, error, isLoading } = useUser()
  if (error) return <div>error</div>

  if (isLoading) return <Loader />

  return (
    <>
      {!user ? (
        <>
          <Title>Bienvenido al Generador de miniaturas</Title>
          <LoginButton href="/api/auth/login">Login</LoginButton>
        </>
      )
        :
        (
          <>
            <LogoutButton href="/api/auth/logout">Logout</LogoutButton>
            <Generator />
          </>
        )
      }

    </>
  )
}
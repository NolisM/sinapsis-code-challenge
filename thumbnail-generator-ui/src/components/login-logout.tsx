import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginButton } from "@/style/login";
import { Loader } from "@/style/loader";
import { Title } from "@/style/title";

export const LoginLogout = () => {
  const { user, error, isLoading } = useUser()
  if (error) return <div>error</div>

  if (isLoading) return <Loader />

  return (
    <>
      {!user ? (
        <>
          <Title>Welcome to the Thumbnail Generator</Title>
          <LoginButton href="/api/auth/login">Login</LoginButton>
        </>
      )
        :
        (
          <LoginButton href="/api/auth/logout">Logout</LoginButton>
        )
      }

    </>
  )
}
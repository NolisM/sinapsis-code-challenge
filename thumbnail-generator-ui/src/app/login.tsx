import { useUser } from "@auth0/nextjs-auth0/client";


export default function Login() {
  const { user, error, isLoading } = useUser()
  return <a href="/api/auth/login">Login</a>;
}
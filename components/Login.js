import { useSession, signIn, signOut } from "next-auth/react"

export function Login() {
  const { data: session } = useSession();
  
  if (session) {
    return (
      <>
        Hola {session.user.email}! <br />
        <button onClick={() => signOut()}>Logout</button>
      </>
    )
  }
  return (
    <>
      Inicia sesión <br />
      <button onClick={() => signIn('github')}>Login</button>
    </>
  )
}
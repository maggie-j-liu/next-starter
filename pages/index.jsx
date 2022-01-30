import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Next.js + TailwindCSS + NextAuth + Prisma Starter</title>
        <meta
          name="description"
          content="A Next.js + TailwindCSS + NextAuth + Prisma starter"
        />
      </Head>
      <main
        className={
          "flex h-screen w-screen flex-col items-center justify-center"
        }
      >
        <h1 className={"text-4xl font-bold text-indigo-800 hover:italic"}>
          A Next.js + TailwindCSS + NextAuth + Prisma Starter
        </h1>
        {session ? (
          <>
            Signed in as {session.user?.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            Not signed in <br />
            <button onClick={() => signIn("github")}>Sign in</button>
          </>
        )}
      </main>
    </div>
  );
}

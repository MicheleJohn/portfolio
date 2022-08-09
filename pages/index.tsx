import { Alert, Button, Card, DarkThemeToggle } from "flowbite-react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Project Storybook
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              This portfolio project has configured a built-in Storybook build.
            </p>
            <Link href="/storybook-static/index.html" target="_blank">
              <a className="text-blue-600 underline">Take a look.</a>
            </Link>
          </Card>
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              System Design Storybook
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the components documented by the system design trough
              Storybook
            </p>
            <Link href="#" className="text-blue-600 underline">
              <a
                href="https://flowbite-react.com/storybook"
                target="_blank"
                className="text-blue-600 underline"
              >
                Take a look
              </a>
            </Link>
          </Card>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;

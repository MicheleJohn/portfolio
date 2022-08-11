import Head from "next/head";
import AppFooter from "./app-footer";
import AppHeader from "./app-header";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-stretch">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <main className="bg-gray-200 dark:bg-gray-700 w-full grow grid">
        {children}
      </main>
      <AppFooter />
    </div>
  );
}

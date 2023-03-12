import { FC, ReactNode } from "react";
import Head from "next/head";

import Header from "../Header/Header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog Cat App</title>
        <meta
          name="description"
          content="Created by @mrtnprzk for Applifting"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full">
        <Header />
        <main className="container mx-auto px-2 mt-4 md:mt-8 lg:mt-12 xl:mt-16">
          {children}
        </main>
      </main>
    </>
  );
};

export default AppLayout;

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
        <section className="container mx-auto px-2 my-4 md:my-8 lg:my-12 xl:my-16">
          {children}
        </section>
      </main>
    </>
  );
};

export default AppLayout;

import { FC, ReactNode } from "react";
import Header from "../Header/Header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <main className="container mx-auto px-2 mt-4 md:mt-8 lg:mt-12 xl:mt-16">
        {children}
      </main>
    </main>
  );
};

export default AppLayout;

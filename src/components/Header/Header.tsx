import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import ArrowRight from "../Icons/ArrowRight";
import { PATHNAME } from "./constants";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const { pathname } = useRouter();

  return (
    <header className="bg-[#F8F9FA] sticky top-0 left-0 right-0">
      <div className="container mx-auto px-2 h-14 flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <Image src="/logo.svg" alt="logo" width={39} height={44} priority />
          <Link
            href={`${PATHNAME.HOMEPAGE}`}
            className={pathname === PATHNAME.HOMEPAGE ? "text-[#212529]" : "text-[#6C757D]"}
          >
            Recent Articles
          </Link>
          <Link
            href={`${PATHNAME.ABOUT}`}
            className={pathname === PATHNAME.ABOUT ? "text-[#212529]" : "text-[#6C757D]"}
          >
            About
          </Link>
        </div>

        <div className="flex space-x-2 text-blue-500">
          <Link href={"/login"} className="whitespace-nowrap">
            Log in
          </Link>
          <ArrowRight size={4} />
        </div>
      </div>
    </header>
  );
};

export default Header;

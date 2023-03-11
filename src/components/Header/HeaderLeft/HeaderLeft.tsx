import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { PATHNAME } from "../constants";

const HeaderLeft: FC = () => {
  const { pathname } = useRouter();

  return (
    <div className="flex items-center space-x-4 md:space-x-10">
      <Link href={`${PATHNAME.HOMEPAGE}`}>
        <Image src="/logo.svg" alt="logo" width={39} height={44} priority />
      </Link>
      <Link
        href={`${PATHNAME.HOMEPAGE}`}
        className={
          pathname === PATHNAME.HOMEPAGE
            ? "text-fontGrayDark"
            : "text-fontGrayLight"
        }
      >
        Recent Articles
      </Link>
      <Link
        href={`${PATHNAME.ABOUT}`}
        className={
          pathname === PATHNAME.ABOUT
            ? "text-fontGrayDark"
            : "text-fontGrayLight"
        }
      >
        About
      </Link>
    </div>
  );
};

export default HeaderLeft;

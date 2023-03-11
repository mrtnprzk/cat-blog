import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { PATHNAME } from "../constants";
import Paragraph from "@/components/Typography/Paragraph";

const HeaderLeft: FC = () => {
  const { pathname } = useRouter();

  return (
    <div className="flex items-center space-x-4 md:space-x-10">
      <Link href={`${PATHNAME.HOMEPAGE}`}>
        <Image src="/logo.svg" alt="logo" width={39} height={44} priority />
      </Link>
      <Link href={`${PATHNAME.HOMEPAGE}`}>
        <Paragraph
          className={
            pathname === PATHNAME.HOMEPAGE
              ? "text-fontGrayDark"
              : "text-fontGrayLight"
          }
        >
          Recent Articles
        </Paragraph>
      </Link>
      <Link href={`${PATHNAME.ABOUT}`}>
        <Paragraph
          className={
            pathname === PATHNAME.ABOUT
              ? "text-fontGrayDark"
              : "text-fontGrayLight"
          }
        >
          About
        </Paragraph>
      </Link>
    </div>
  );
};

export default HeaderLeft;

import { FC } from "react";
import Link from "next/link";
import ArrowRight from "../../Icons/ArrowRight";
import Anchor from "@/components/Typography/Anchor";

const HeaderRight: FC = ({}) => {
  const isLoggedIn = false;

  return (
    <>
      {!isLoggedIn ? (
        <div className="flex space-x-2">
          <Link href={"/login"}>
            <Anchor>Log in</Anchor>
          </Link>
          <div className="w-4 my-auto">
            <ArrowRight />
          </div>
        </div>
      ) : (
        <div>TODO make component when is logged in</div>
      )}
    </>
  );
};

export default HeaderRight;

import { FC } from "react";
import Link from "next/link";
import ArrowRight from "../../Icons/ArrowRight";

const HeaderRight: FC = ({}) => {
  const isLoggedIn = false;

  return (
    <>
      {!isLoggedIn ? (
        <div className="flex space-x-2 text-fontBlue">
          <Link href={"/login"}>Log in</Link>
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

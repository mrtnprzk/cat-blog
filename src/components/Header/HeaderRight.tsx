import { FC } from "react";
import Link from "next/link";
import ArrowRight from "../Icons/ArrowRight";

const HeaderRight: FC = ({}) => {
  const isLoggedIn = false;

  return (
    <>
      {!isLoggedIn ? (
        <div className="flex space-x-2 text-fontBlue">
          <Link href={"/login"} className="whitespace-nowrap">
            Log in
          </Link>
          <ArrowRight size={4} />
        </div>
      ) : (
        <div>TODO make component when is logged in</div>
      )}
    </>
  );
};

export default HeaderRight;

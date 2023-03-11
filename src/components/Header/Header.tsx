import { FC } from "react";

import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

const Header: FC = () => {
  return (
    <header className="bg-headerGray sticky top-0 left-0 right-0">
      <div className="container mx-auto px-2 h-14 flex justify-between items-center">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;

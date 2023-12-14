// SubDropdownMenu.jsx

import React from "react";
import Link from "next/link";

const SubDropdownMenu = () => {
  return (
    <div className="sub-dropdown-menu">
      <Link href="/creary" className="sub-menu-links">
        Creary
      </Link>
      <Link href="/fletcher" className="sub-menu-links">
        Fletcher
      </Link>
      <Link href="/king" className="sub-menu-links">
        King
      </Link>
    </div>
  );
};

export default SubDropdownMenu;

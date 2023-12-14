// SubDropdownMenu.jsx

import React from "react";
import Link from "next/link";

const SubDropdownMenu = () => {
  return (
    <div className="sub-dropdown-menu">
      <Link href="/creary" className="sub-menu-links">
        Ludlow Creary
      </Link>
      <Link href="/fletcher" className="sub-menu-links">
        Loyst Fletcher
      </Link>
      <Link href="/king" className="sub-menu-links">
        Stephen A. King
      </Link>
    </div>
  );
};

export default SubDropdownMenu;

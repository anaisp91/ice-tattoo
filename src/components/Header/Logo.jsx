import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        src="/images/header/logo-negro.png"
        alt="ice tattoo logo"
        className="max-w-[100px]"
      />
    </Link>
  );
};

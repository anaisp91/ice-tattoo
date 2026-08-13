import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="relative">
      <button onClick={onClick} className="pr-6 md:hidden text-2xl">
        {open ? "X" : "☰"}
      </button>
      {open ? (
        <ul
          className="absolute flex flex-col items-end top-[66px] bg-stone-300/90 right-[-24px] w-screen pr-10 py-4 text-lg uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <li>
            <Link to={"/"} onClick={onClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={onClick}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/gallery"} onClick={onClick}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to={"/faq"} onClick={onClick}>
              Faq
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={onClick}>
              Contact
            </Link>
          </li>
        </ul>
      ) : (
        <ul
          className=" hidden md:flex md:gap-8 text-neutral-900 uppercase lg:text-lg"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/faq"}>Faq</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

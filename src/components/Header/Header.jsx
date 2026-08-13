import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-1 bg-stone-300 lg:py-3">
      <Logo />
      <Navbar />
    </header>
  );
};

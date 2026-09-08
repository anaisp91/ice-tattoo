import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-2 bg-[var(--color-sand)] lg:py-3">
      <Logo />
      <Navbar />
    </header>
  );
};

import { Brand } from "./Brand";
import { Information } from "./Information";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <footer className="flex flex-row justify-around items-center py-4 bg-[var(--color-black)] ">
      <Brand />
      <Information />
      <SocialLinks />
    </footer>
  );
};

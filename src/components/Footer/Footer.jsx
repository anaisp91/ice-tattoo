import { Brand } from "./Brand";
import { Information } from "./Information";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <footer className="flex flex-row justify-around items-center py-4 bg-neutral-900 ">
      <Brand />
      <Information />
      <SocialLinks />
    </footer>
  );
};

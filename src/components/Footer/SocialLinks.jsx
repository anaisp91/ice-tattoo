import { EmailIcon, InstagramIcon } from "../Icons";

export const SocialLinks = () => {
  return (
    <section className="">
      <ul className="flex flex-row gap-3 md:gap-10">
        <li>
          <InstagramIcon />
        </li>
        <li>
          <EmailIcon />
        </li>
      </ul>
    </section>
  );
};

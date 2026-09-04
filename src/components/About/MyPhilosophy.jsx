import { LinkButton } from "../ui";

export const MyPhilosophy = () => {
  return (
    <section className="py-20 flex flex-col items-center gap-8 bg-stone-300 text-neutral-900 md:px-8">
      <h2
        className="text-4xl uppercase lg:text-6xl lg:pb-8"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Trust the process
      </h2>
      <p
        className="text-base text-justify px-10 lg:px-40"
        style={{ fontFamily: "var(--font-body)" }}
      >
        I believe getting a tattoo should be a collaborative process, but also
        one where you can trust the artist you’ve chosen. I’m a perfectionist
        and I care deeply about the artistic side of my work, so once we’ve
        discussed your idea, I want you to feel comfortable letting me take it
        from there. <br />
        For me, a tattoo should feel personal and unique. If you choose to
        collect tattoos, each one should represent something about you — not
        simply be something that could belong to anyone.
      </p>
      <LinkButton
        to={"/contact"}
        title={"Get in touch"}
        className={
          "uppercase text-neutral-900 border border-neutral-900 px-7 py-3 transition-colors duration-300 hover:text-stone-300 hover:bg-neutral-900"
        }
      />
    </section>
  );
};

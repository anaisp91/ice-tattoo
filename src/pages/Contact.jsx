import { ContactForm } from "../components";
export const Contact = () => {
  return (
    <>
      <title>Book a Tattoo | Ice Tattoo Barcelona</title>

      <meta
        name="description"
        content="Book a tattoo with Ice Tattoo in Barcelona. Get in touch to discuss your tattoo idea, custom design, size, placement and references."
      />
      <section className="py-14 bg-[var(--color-black)] flex-1 flex flex-col items-center md:py-20">
        <h2
          className="text-center text-3xl text-[var(--color-sand)] pb-7 uppercase tracking-wider md:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Contact
        </h2>
        <ContactForm />
      </section>
    </>
  );
};

import { ContactForm } from "../components";
export const Contact = () => {
  return (
    <section className="py-14 bg-[var(--color-black)] flex-1 flex flex-col items-center md:py-20">
      <h2
        className="text-center text-3xl text-[var(--color-sand)] pb-7 uppercase tracking-wider md:text-5xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Contact
      </h2>
      <ContactForm />
    </section>
  );
};

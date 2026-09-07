import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section className="py-20 bg-[var(--color-sand)] flex flex-col items-center gap-7 ">
      <h2
        className="text-2xl text-[var(--color-black)] uppercase tracking-wider text-center"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Ready for your next tattoo?
      </h2>
      <p
        className="text-base text-center "
        style={{ fontFamily: "var(--font-body)" }}
      >
        Let's create something unique together
      </p>
      <div className="text-center md:pt-4">
        <Link
          to={"/contact"}
          className="py-3 px-7 text-[var(--color-black)] uppercase tracking-[0.2em] border border-[var(--color-black)] transition-all duration-300 hover:bg-[var(--color-blue)] hover:text-[var(--color-sand)] hover:border-[var(--color-blue)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Book now
        </Link>
      </div>
    </section>
  );
};

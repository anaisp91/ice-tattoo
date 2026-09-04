import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section className="py-20 bg-stone-300 flex flex-col items-center gap-7 ">
      <h2
        className="text-2xl text-neutral-900 uppercase tracking-wider text-center"
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
          className="py-3 px-7 text-neutral-900 uppercase tracking-[0.2em] border border-neutral-900 transition-all duration-300 hover:bg-sky-950 hover:text-stone-300"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Book now
        </Link>
      </div>
    </section>
  );
};

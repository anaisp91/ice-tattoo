import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className=" flex-1 flex flex-col gap-3 items-center py-20 bg-[var(--color-black)] md:py-32">
      <h2
        className="text-center text-6xl text-[var(--color-sand)] md:text-8xl"
        style={{ fontFamily: "var(--font-body)" }}
      >
        404
      </h2>
      <h3
        className=" text-[var(--color-sand)] text-4xl pb-8 md:text-6xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Not Found
      </h3>
      <Link
        to={"/"}
        className="text-[var(--color-sand)] text-center py-3 px-7 border hover:bg-[var(--color-blue)] hover:border-[var(--color-blue)] transition-all duration-300 md:text-lg"
      >
        Back to home
      </Link>
    </section>
  );
};

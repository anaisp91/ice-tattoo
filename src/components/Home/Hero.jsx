export const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-8 pt-14  md:flex-row bg-neutral-900">
      <div
        className="text-center pb-5
            md:flex-1 md:pl-6"
      >
        <h1
          className=" text-5xl tracking-wide uppercase p-2 text-stone-300 md:text-5xl md:tracking-wider lg:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ice Tattoo
        </h1>
        <p
          className="text-stone-400 text-[1rem]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Traditional & Fine Line Tattoo Artist
        </p>
      </div>

      <div
        className="w-4/5 pb-12
            md:flex-1 md:pr-7"
      >
        <img
          src="/images/home/foto-hero.JPG"
          alt="Ice tattooing a client"
          className="w-full h-auto max-w-lg brightness-90 "
        />
      </div>
    </section>
  );
};

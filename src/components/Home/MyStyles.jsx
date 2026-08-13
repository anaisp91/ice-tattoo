export const MyStyles = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <h2
        className="text-center text-stone-300 text-4xl uppercase tracking-wider"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        My Styles
      </h2>

      <div className="flex flex-col items-center md:flex-row md:px-6 md:justify-center md:pt-1">
        <div className="p-10">
          <h3
            className="text-center pb-10 text-stone-300 text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Traditional
          </h3>
          <ul className="flex flex-col gap-8 max-w-80">
            <li>
              <img
                src="/images/home/tigre-home.jpg"
                alt="traditional tattoo of a tiger"
              />
            </li>
            <li>
              <img
                src="/images/home/pecho-home.JPG"
                alt="traditional floral chest tattoo"
                className="w-full"
              />
            </li>
            <li>
              <img
                src="/images/home/grulla-home.JPG"
                alt="traditional tattoo of a crane"
                className="w-full"
              />
            </li>
          </ul>
        </div>
        <div className="p-10">
          <h3
            className="text-center pb-10 text-stone-300 text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Fineline
          </h3>
          <ul className="flex flex-col gap-8 max-w-80">
            <li>
              <img
                src="/images/home/abanico-fino-home.jpg"
                alt="fineline tattoo of a fan"
                className="w-full"
              />
            </li>
            <li>
              <img
                src="/images/home/gato-fino-home.JPG"
                alt="fineline medieval cat tattoo"
                className="w-full"
              />
            </li>
            <li>
              <img
                src="/images/home/rana-fina-home.JPG"
                alt="fineline tattoo of a frog with a Barcelona flower"
                className="w-full"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

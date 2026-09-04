export const Styles = () => {
  return (
    <section className="py-10 flex flex-col items-center gap-8 bg-neutral-900 text-stone-300 md:px-8  lg:flex-row">
      <div className="flex flex-col gap-5 py-10 ">
        <h2
          className="text-4xl uppercase text-center lg:text-6xl lg:pb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          My Styles
        </h2>
        <p
          className="text-base text-justify px-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Two styles, two different ways of creating. My Traditional work is
          built around bold lines, strong contrast and a black-and-white
          approach. I’ve developed my own take on the style, using clean,
          straight lines and often drawing inspiration from animals.
          <br /> Fine Line is a completely different language, but one I enjoy
          mastering just as much. Working with delicate lines and precision
          allows me to explore another side of my artistic practice.
          <br /> Whether bold or delicate, I want every tattoo to feel personal
          to the person wearing it.
        </p>
      </div>

      <div className="flex flex-row gap-5  lg:flex-col lg:items-end">
        <img
          src="/images/about/leopardo-tradicional.jpg"
          alt="traditional leopard head tattoo"
          className="w-[175px] h-auto md:w-[250px] lg:w-[700px]"
        />
        <img
          src="/images/about/tiburon-fineline.jpg"
          alt="fineline shark tattoo"
          className="w-[175px] h-auto md:w-[250px] lg:w-[700px]"
        />
      </div>
    </section>
  );
};

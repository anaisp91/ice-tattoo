export const WhoIAm = () => {
  return (
    <section className="py-10 flex flex-col gap-4 items-center bg-neutral-900 md:flex-row md:px-8 lg:gap-8">
      <div className="px-10 text-justify text-stone-300 md:flex-1 lg:px-20">
        <h2
          className="text-2xl text-center pb-5 uppercase lg:text-6xl lg:text-start lg:pb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Who I am
        </h2>
        <p className="text-base" style={{ fontFamily: "var(--font-body)" }}>
          I’m Ice, a tattoo artist and visual artist based in Barcelona.
          <br /> I started tattooing in 2016, driven by a need to explore art
          beyond traditional boundaries and established rules. Tattooing became
          a way for me to bring art into a different space — one that is deeply
          personal, permanent and shared with another person.
          <br />
          What I love most about tattooing is the connection it creates. I get
          to meet people from completely different backgrounds, yet somehow we
          find common ground through art. Knowing that someone chooses to carry
          a little piece of my work with them is a feeling that is difficult to
          put into words. <br />
          For me, every tattoo is a collaboration, a conversation and a piece of
          art that becomes part of someone's story.
        </p>
      </div>
      <div className="w-[300px] h-auto pt-5  md:pr-8 lg:w-[400px]">
        <img
          src="/images/about/painting-tiger.JPG"
          alt="ice painting a tiger with acrilycs"
        />
      </div>
    </section>
  );
};

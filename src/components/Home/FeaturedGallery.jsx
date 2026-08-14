import { Link } from "react-router-dom";
export const FeaturedGallery = () => {
  return (
    <section className="pb-20 pt-17 bg-neutral-900 md:py-20">
      <h2
        className="text-center pb-12 text-4xl text-stone-300 uppercase tracking-wider"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Portfolio <br className="md:hidden" /> Highlights
      </h2>
      <div className="grid grid-cols-2 gap-2 px-3 md:grid-cols-3 md:px-6 lg:grid-cols-4">
        <div className="overflow-hidden lg:col-span-2 lg:row-end-3">
          <img
            src="/images/featuredGallery/cocodrilo-featured.jpg"
            alt="traditional cocodrile tattoo"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/featuredGallery/dini-featured.jpg"
            alt="traditional dinosaur tattoo"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden col-span-2 md:col-span-1">
          <img
            src="/images/featuredGallery/espalda-featured.jpg"
            alt="ornamental back piece tattoo"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden lg:row-start-3">
          <img
            src="/images/featuredGallery/liam-featured.jpg"
            alt="fineline dinosaur tattoo"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/featuredGallery/jardinets-featured.jpg"
            alt="fineline sculpture tattoo"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden col-span-2 md:col-span-1 ">
          <img
            src="/images/featuredGallery/grulla-featured.jpg"
            alt="traditional crane tattoo"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/featuredGallery/molotov-featured.jpg"
            alt="fineline molotov bottle tattoo"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/featuredGallery/swallow-featured.jpg"
            alt="traditional swallow tattoo"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden col-span-2 md:col-span-1 lg:col-start-3 lg:col-end-5 lg:row-start-2">
          <img
            src="/images/featuredGallery/tiger-featured.jpg"
            alt="traditional tiger tattoo"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </div>
      <div className="pt-16 text-center md:pt-20">
        <Link
          to={"/gallery"}
          className="py-3 px-8 border border-stone-300 text-stone-300 uppercase tracking-[0.2em] transition-all duration-300 hover:bg-stone-300 hover:text-neutral-900 "
        >
          View Full Gallery
        </Link>
      </div>
    </section>
  );
};

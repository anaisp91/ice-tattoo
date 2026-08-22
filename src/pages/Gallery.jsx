import { useState } from "react";
import { GalleryData } from "../data/GalleryData";
import { ImageModal } from "../components";
import { LinkButton } from "../components";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onClick = (item) => {
    setSelectedImage(item);
  };

  return (
    <div className="py-10 md:py-20 bg-neutral-900 pb-20">
      <h2
        className="text-3xl uppercase text-center text-stone-300 md:text-5xl lg:text-6xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Gallery
      </h2>

      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      <section className="py-10 px-5 md:py-20 md:px-9">
        <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
          {GalleryData.map((item) => (
            <li key={item.key}>
              <img
                src={item.src}
                alt={item.alt}
                onClick={() => onClick(item)}
              />
            </li>
          ))}
        </ul>
      </section>
      <div className="flex flex-col items-center gap-7">
        <p className="text-stone-300 text-base text-center">
          Found something that speaks to you?
          <br />
          Let's create something personal together.
        </p>
        <LinkButton
          to={"/contact"}
          className={
            "uppercase text-stone-300 border border-stone-300 py-3 px-7 transition-all duration-300 hover:bg-sky-950 hover:border-sky-950"
          }
          title={"Get in touch"}
        />
      </div>
    </div>
  );
};

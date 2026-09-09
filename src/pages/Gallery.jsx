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
    <>
      <title>Tattoo Gallery | Traditional & Fine Line Tattoos</title>

      <meta
        name="description"
        content="Explore Ice Tattoo's gallery of Traditional and Fine Line tattoos, created in Barcelona. Discover original tattoo designs and find inspiration for your next tattoo."
      />
      <div className="py-14 md:py-20 bg-[var(--color-black)] pb-20">
        <h2
          className="text-4xl uppercase text-center text-[var(--color-sand)] md:text-5xl lg:text-6xl"
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
          <p className="text-[var(--color-sand)] text-base text-center">
            Found something that speaks to you?
            <br />
            Let's create something personal together.
          </p>
          <LinkButton
            to={"/contact"}
            className={
              "uppercase text-[var(--color-sand)] border border-[var(--color-sand)] py-3 px-7 transition-all duration-300 hover:bg-[var(--color-blue)] hover:border-[var(--color-blue)]"
            }
            title={"Get in touch"}
          />
        </div>
      </div>
    </>
  );
};

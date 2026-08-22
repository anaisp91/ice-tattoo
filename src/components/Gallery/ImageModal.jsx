import { GalleryData } from "../../data/GalleryData";

export const ImageModal = ({ selectedImage, setSelectedImage }) => {
  const currentIndex = GalleryData.findIndex(
    (item) => item.key === selectedImage.key,
  );
  //Calculamos el indice
  const next = (currentIndex) => {
    if (currentIndex === GalleryData.length - 1) {
      return 0;
    }
    return currentIndex + 1;
  };
  const previous = (currentIndex) => {
    if (currentIndex === 0) {
      return GalleryData.length - 1;
    }
    return currentIndex - 1;
  };

  //Gestion del pulsado de la flecha
  const handleNext = () => {
    const nextIndex = next(currentIndex);
    const nextImage = GalleryData[nextIndex];
    setSelectedImage(nextImage);
  };
  const handlePrevious = () => {
    const previousIndex = previous(currentIndex);
    const previousImage = GalleryData[previousIndex];
    setSelectedImage(previousImage);
  };
  return (
    <div
      onClick={() => setSelectedImage(null)}
      className="fixed inset-0 bg-neutral-900/90 flex flex-col items-center justify-center gap-10 lg:gap-8"
    >
      <img
        onClick={(e) => e.stopPropagation()}
        src={selectedImage.src}
        alt={selectedImage.alt}
        className="max-w-[95vw] max-h-[95vw] md:max-w-[80vw] md:max-h-[80vw] lg:max-w-[40vw] lg:max-h-[40vw]"
      />
      <div
        className="flex flex-row gap-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-stone-300 md:size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        <button
          onClick={() => setSelectedImage(null)}
          className="text-stone-300 text-3xl"
        >
          X
        </button>
        <button onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-stone-300 md:size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

import {
  Hero,
  MyStyles,
  FeaturedGallery,
  FaqPreview,
  BookingProcess,
  Contact,
} from "../components";

export const Home = () => {
  return (
    <div>
      <Hero />
      <MyStyles />
      <FeaturedGallery />
      <BookingProcess />
      <FaqPreview />
      <Contact />
    </div>
  );
};

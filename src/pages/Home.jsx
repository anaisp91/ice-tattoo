import {
  Hero,
  MyStyles,
  FeaturedGallery,
  FaqPreview,
  CallToAction,
  BookingProcess,
} from "../components";

export const Home = () => {
  return (
    <div>
      <Hero />
      <MyStyles />
      <FeaturedGallery />
      <BookingProcess />
      <FaqPreview />
      <CallToAction />
    </div>
  );
};

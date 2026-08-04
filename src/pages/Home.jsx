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
      <h1>Home</h1>
      <Hero />
      <MyStyles />
      <FeaturedGallery />
      <BookingProcess />
      <FaqPreview />
      <CallToAction />
    </div>
  );
};

import {
  Hero,
  WhatIDo,
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
      <WhatIDo />
      <FeaturedGallery />
      <BookingProcess />
      <FaqPreview />
      <CallToAction />
    </div>
  );
};

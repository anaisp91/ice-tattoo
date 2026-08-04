import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section>
      <h2>Ready for your next tattoo?</h2>
      <p>Let's create something unique together</p>
      <Link to={"/contact"}>Book now</Link>
    </section>
  );
};

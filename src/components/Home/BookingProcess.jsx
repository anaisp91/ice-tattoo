import { BookingStep } from "./BookingStep";

export const BookingProcess = () => {
  return (
    <section>
      <h2>How to Book</h2>
      <p>Follow the steps</p>
      <ul>
        <li>
          <BookingStep number={"..."} title={"..."} description={"..."} />
        </li>
        <li>
          <BookingStep number={"..."} title={"..."} description={"..."} />
        </li>
        <li>
          <BookingStep number={"..."} title={"..."} description={"..."} />
        </li>
        <li>
          <BookingStep number={"..."} title={"..."} description={"..."} />
        </li>
      </ul>
    </section>
  );
};

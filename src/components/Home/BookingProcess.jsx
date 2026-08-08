import { BookingStep } from "./BookingStep";
import { bookingData } from "../../data/BookingData";

export const BookingProcess = () => {
  return (
    <section className="py-20 bg-stone-300">
      <h2
        className="text-center pb-5 text-5xl uppercase tracking-wide"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        How It Works
      </h2>
      <p
        className="text-center pb-6 text-base"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Follow the steps
      </p>
      <ul className="flex flex-col items-center px-10 md:flex-row md:gap-12 md:items-start">
        {bookingData.map((step) => (
          <li key={step.number}>
            <BookingStep
              number={step.number}
              title={step.title}
              description={step.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

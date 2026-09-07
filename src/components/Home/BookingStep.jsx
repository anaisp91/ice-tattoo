export const BookingStep = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <span
        className="pb-4 text-6xl text-[var(--color-black)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {number}
      </span>
      <div className="w-20 h-px bg-[var(--color-black)]" />
      <h3
        className="pb-2 text-2xl text-[var(--color-black)] md:text-xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p
        className="text-base pb-6 leading-7 text-[var(--color-black)] md:text-start"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {description}
      </p>
    </div>
  );
};

export const BookingStep = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <span
        className="pb-4 text-6xl text-slate-800"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {number}
      </span>
      <div className="w-20 h-px bg-slate-700" />
      <h3
        className="pb-2 text-2xl text-neutral-900 md:text-xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p
        className="text-base pb-6 leading-7 text-slate-800 md:text-start"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {description}
      </p>
    </div>
  );
};

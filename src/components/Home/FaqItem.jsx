export const FaqItem = ({ question, answer }) => {
  return (
    <>
      <details className="px-10 py-3">
        <summary
          className="text-[var(--color-sand)] text-xl md:text-2xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {question}
        </summary>
        <p
          className="text-[var(--color-sand)] text-base p-2 px-7 text-left md:text-xl"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {answer}
        </p>
      </details>
      <div className="w-56 h-px bg-[var(--color-sand)] ml-10 mt-1 "></div>
    </>
  );
};

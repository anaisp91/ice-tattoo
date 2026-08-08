export const FaqItem = ({ question, answer }) => {
  return (
    <details className="px-10 pb-6">
      <summary
        className="text-stone-300 text-xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {question}
      </summary>
      <p
        className="text-stone-300 text-base p-2 px-7 text-left"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {answer}
      </p>
    </details>
  );
};

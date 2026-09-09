import { FaqItem } from "../components";
import { faqData } from "../data/FaqData";
export const Faq = () => {
  return (
    <section className="py-14 bg-[var(--color-black)] flex-1">
      <h2
        className="text-center text-3xl uppercase text-[var(--color-sand)] md:text-5xl md:py-14 lg:text-6xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Frequent Asked Questions
      </h2>
      <div className="py-10 md:px-10 lg:px-20">
        {faqData.map((item) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
};

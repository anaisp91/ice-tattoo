import { FaqItem } from "./FaqItem";
import { faqData } from "../../data/FaqData";

export const FaqPreview = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <h2
        className="text-center text-4xl text-stone-300 uppercase tracking-wider pb-8"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Frequent Faq
      </h2>

      <div className="md:pl-14 pt-6 lg:pl-24">
        {faqData.slice(0, 4).map((item) => (
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

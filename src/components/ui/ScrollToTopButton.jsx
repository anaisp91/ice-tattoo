import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => window.scrollTo(0, 0);
  return (
    <div>
      {showButton && (
        <button
          onClick={handleClick}
          className="fixed bottom-10 md:bottom-20 lg:bottom-10 right-6 bg-[var(--color-sand)] rounded-full w-16 h-16 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up text-[var(--color-black)]"
          >
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
          </svg>
        </button>
      )}
    </div>
  );
};

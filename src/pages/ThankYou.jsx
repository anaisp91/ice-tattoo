import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const ThankYou = () => {
  const data = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data.state?.fromForm) {
      navigate("/contact");
    }
  }, [data.state, navigate]);
  return (
    <div className="flex-1 bg-[var(--color-black)] flex flex-col py-24 items-center gap-4 md:py-36">
      <h2
        className="text-[var(--color-sand)] uppercase text-4xl md:text-6xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Thank you!
      </h2>
      <p
        className="text-[var(--color-sand)] pb-6 "
        style={{ fontFamily: "var(--font-body)" }}
      >
        Your message has been sent successfully.
      </p>
      <Link
        to={"/"}
        className="text-[var(--color-sand)] border border-[var(--color-sand)] py-3 px-7 hover:bg-[var(--color-blue)] hover:border-[var(--color-blue)] "
      >
        Back to Home
      </Link>
    </div>
  );
};

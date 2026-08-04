export const BookingStep = ({ number, title, description }) => {
  return (
    <div>
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

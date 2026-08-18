import { Link } from "react-router-dom";

export const LinkButton = ({ className, title, to }) => {
  return (
    <Link to={to} className={className}>
      {title}
    </Link>
  );
};

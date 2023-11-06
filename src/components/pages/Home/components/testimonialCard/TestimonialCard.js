import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TestimonialCard.css";

const TestimonialCard = ({ customer }) => {
  const getRating = (ratingValue) => {
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key={stars.length} icon={faStarHalfStroke} />);
    }

    return stars;
  };
  return (
    <article className="testimonial-card">
      <img src={customer.image} alt={customer.fullName} />
      <h4>{customer.fullName}</h4>
      <span>{getRating(customer.rating)}</span>
      <blockquote>
        <p>"{customer.says}"</p>
      </blockquote>
    </article>
  );
};

export default TestimonialCard;

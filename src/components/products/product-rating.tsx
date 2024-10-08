import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as starSolid,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";

type Props = {
  rating: number;
};

export default function ProductRating({ rating }: Props) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="[&_svg]:text-[#ffd43b]">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={starSolid} />
      ))}
      {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={starRegular} />
      ))}
    </div>
  );
}

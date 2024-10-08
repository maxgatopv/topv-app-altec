import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

// Custom Previous Arrow
export const PrevArrow = ({ className, onClick }: ArrowProps) => (
  <div
    className={`${className} bg-gray-500 hover:bg-theme-color hover:opacity-95 rounded-full `}
    style={{ padding: "1px 0 0 0" }}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faArrowLeft} />
  </div>
);

// Custom Next Arrow
export const NextArrow = ({ className, onClick }: ArrowProps) => (
  <div
    className={`${className} bg-gray-500 hover:bg-theme-color hover:opacity-95 rounded-full`}
    style={{ padding: "1px 0 0 0" }}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faArrowRight} />
  </div>
);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialData } from "@/const/social.data";

interface Props {
  styleColor: string;
}

const SocialButton: React.FC<Props> = ({ styleColor }) => {
  return (
    <ul className="flex justify-center space-x-2 px-6">
      {socialData.map((social, index) => (
        <li key={index}>
          <a href={social.path} target="_blank">
            <button className={`btn-social shadow-md ${styleColor}`}>
              <FontAwesomeIcon icon={social.icon} className="fa-2x"/>
            </button>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialButton;

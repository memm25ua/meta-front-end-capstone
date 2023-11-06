import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const ComingSoon = () => {
  return (
    <div className="container under-construction">
      <FontAwesomeIcon icon={faCode} size="10x"  />
      <h2>Coming Soon...</h2>
    </div>
  );
};

export default ComingSoon;

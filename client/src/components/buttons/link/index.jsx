import { React, useNavigate, FontAwesomeIcon } from '../../../constants'

const LinkButton = (props) => {
  const navigate = useNavigate();
  const { link, styling, icon } = props;

  return (
    <div className={`${styling}`} onClick={() => navigate(`${link}`)}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default LinkButton
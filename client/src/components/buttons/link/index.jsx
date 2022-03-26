import React from 'react'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
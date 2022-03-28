import "./Email.scss";

export default function Select(props) {
  const { name, onClick } = props;
  return (
    <button className='email-button' type='Submit' onClick={onClick} value={name}>{name}</button>
  );
}

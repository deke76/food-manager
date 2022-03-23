import "./Select.scss";

export default function Select(props) {
  const { name, onClick } = props;
  return (
    <button className='select' type='Submit' onClick={onClick} value={name}>{name}</button>
  );
}

import useFetchServer from "../../hooks/useFetchServer";

export default function FoodBrowse(props) {
  const { responseData } = useFetchServer("foods");
  
  return (
    <div>
      <h2>Hello from FoodBrowse</h2>
      {responseData.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}

export default function FoodView(props) {
  const { foodItem } = props;
  return (
    <div>
      <h1>{foodItem.name}</h1>
      <table>
        <tr>
          <th>Purchase Date</th>
          <td>{foodItem.datePurchased}</td>
        </tr>
        <tr>
          <th>Purchase Date</th>
          <td>{foodItem.datePurchased}</td>
        </tr>
      </table>
    </div>
  );
}

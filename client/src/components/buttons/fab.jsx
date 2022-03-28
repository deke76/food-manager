import Button from "./actions/Button";
import "./fab.scss";

export default function FloatingActionButton(props) {
  return (
    <div className="fab-container">
      <Button icon="plus" linkTo="/foods/add" />
      <Button icon="recipe" linkTo="/recipes" />
    </div>
  );
}

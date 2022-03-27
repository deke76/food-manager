import { Button, useState } from "../../../constants";

import { action } from "@storybook/addon-actions";

export default {
  component: Button,
};

const edit = () => action("edit");
const add = () => action("add");

export const Add = () => <Button onClick={add} icon="plus" />;
export const Edit = () => <Button onClick={edit} icon="pen" />;
export const EditWithText = () => <Button onClick={edit} icon="pen" text="Edit" />;
export const Caret = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return <Button onClick={toggleOpen} icon="caret" open={open} />;
};
export const CaretWithText = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return <Button onClick={toggleOpen} icon="caret" text="Expand" open={open} />;
};

import { Button, useState } from "../../../constants";

import { action } from "@storybook/addon-actions";

export default {
  component: Button,
};

const add = () => action("add");

export const Add = () => <Button onClick={add} icon="plus" />;
export const Save = () => <Button onClick={add} icon="save" />;
export const Delete = () => <Button onClick={add} icon="delete" />;
export const AddWithText = () => <Button onClick={add} text="New" icon="plus" />;


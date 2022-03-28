import Button from "./Button";

// import "../../index.scss";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

export default {
  component: Button,
};

const add = () => action("add");

export const Add = () => <Button onClick={add} icon="plus" />;
export const AddWithText = () => <Button onClick={add} text="New" icon="plus" />;


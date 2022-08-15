import * as React from "react";
import "./Button.css";

export interface IButton {
  label: string;
}

const Button = ({ label }: IButton) => {
  return <button className="un_button">{label}</button>;
};

export default React.memo(Button)

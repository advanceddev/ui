import * as React from "react";

export interface IButton {
  label: string;
}

const Button = ({ label }: IButton) => {
  return <button>{label}</button>;
};

export default React.memo(Button)

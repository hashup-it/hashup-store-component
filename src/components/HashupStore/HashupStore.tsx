import React from "react";

export interface HashupStoreProps {
  label: string;
}

const Button = (props: HashupStoreProps) => {
  return <button>{props.label}</button>;
};

export default Button;
import React, { useState } from "react";
import { useEthereum } from "../../hooks/useEthereum";

export interface HashupStoreProps {
  licenseAddress: string;
}


const Button = (props: HashupStoreProps) => {


	

  const { isLoading } = useEthereum()

  return <button>
	  {isLoading ? "loading" : "ok"}
  </button>;
};

export default Button;
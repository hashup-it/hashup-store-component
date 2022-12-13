import { useEffect, useState } from "react";
import { ethers } from "ethers";

import StoreV0_ABI from "../abi/HashupStoreV0.json";

export const useEthereum = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [walletInstalled, setWalletInstalled] = useState<boolean>(false);
  const [provider, setProvider] =
    useState<ethers.providers.JsonRpcProvider | null>(null);

  const [storeV0Contract, setStoreV0Contract] = useState();

  // Check if ethereum installed
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setWalletInstalled(true);
    }
  }, []);

  // Load provider
  useEffect(() => {
    if (walletInstalled) {
      let newProvider = new ethers.providers.JsonRpcProvider();
      setProvider(provider);
      console.log(newProvider);
    }
  }, [walletInstalled]);

  return { isLoading, walletInstalled };
};

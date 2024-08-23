import Image from "next/image";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
// Import any additional wallet plugins. Ex.
import { OKXWallet } from "@okwallet/aptos-wallet-adapter";
// ...
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Header } from "./components/Header";
import { PetraWallet } from "petra-plugin-wallet-adapter";

export default function Home() {
  const wallets = [new PetraWallet()];

  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>

   <div>
    <Header/>
   </div>
   </AptosWalletAdapterProvider>

  );
}

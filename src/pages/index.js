import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "../../components/Header";
import Body from "../../components/Body";
import VerdictsAndSettlements from "../../components/VerdictsAndSettlements";

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}

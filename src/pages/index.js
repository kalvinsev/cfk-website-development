import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "../../components/Header";
import VerdictsAndSettlements from "../../components/VerdictsAndSettlements";
import TMF from "../../components/TMF";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <VerdictsAndSettlements />
      <TMF />
      <Contact />
      <Footer />
    </>
  );
}

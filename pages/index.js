import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Header from "./components/Header";
import Purpose from "./components/Purpose";
import Wedetailed from "./components/Wedetailed";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className="" style={{fontFamily:"Poppins"}}>
        <Header />
        <Banner />
        <Purpose />
        <WhyUs/>
        <Clients/>
        <Wedetailed/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

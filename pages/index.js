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
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FloatingWhatsApp from 'react-floating-whatsapp'

export default  function Home() {
  // const cards =  gsap.utils.toArray(".cards");

  // cards.forEach((card) => {
  //   const anim = gsap.fromTo(
  //     card,
  //     {
  //       autoAlpa: 0,
  //       y: 100,
  //       x: -100,
  //       rotate: -10,
  //     },
  //     {
  //       duration: 0.6,
  //       autoAlpa: 1,
  //       y: 0,
  //       x: 0,
  //       rotate: 0,
  //     }
  //   );
  //   ScrollTrigger.create({ trigger: card, animation: anim });
  // });
  return (
    <div className=''>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />

{/* Favicon */}
        <link rel="icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <title>XRI Agency</title>
        
      </Head>
      <div className='' style={{ fontFamily: "Open Sans" }}>
      <FloatingWhatsApp className="z-50" accountName="XRI" phoneNumber="+263772219600" avatar="/assets/david.jpeg" allowClickAway/>

        <div className='card'>
          <Header />
        </div>
        <div className='card'>
          {" "}
          <Banner />
        </div>
        <div className='card'>
          <Purpose />
        </div>
        <div className='card'>
          {" "}
          <WhyUs />
        </div>
        <div className='card'>
          {" "}
          <Clients />
        </div>
        <div className='card'>
          <Wedetailed />
        </div>
        <div className='card'>
          <Contact />
        </div>
        <div className='card'>
          {" "}
          <Footer />
        </div>
      </div>
    </div>
  );
}

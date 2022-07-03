import Head from "next/head";
import Intro from "../components/Intro";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";
import {data} from '../data'
import Testimonials from "../components/Testimonials";

export default function Home({services}) {

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

// Нужно в Next для подгрузки данных, например через fetch
export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services }
  }
}

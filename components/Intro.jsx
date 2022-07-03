import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

function Intro() {
  return (
    <div className={styles.container}>
        <Circle background="yellow" top="-50vh" left="-50vh" />
        <Circle background="#01c686" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>AV0CAD0</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={styles.button}>DUSCOVER</button>
      </div>
      <div className={styles.card}>
        <Image src="/img/Avocado.png" layout="fill" objectFit="cover" priority="true" alt="" />
      </div>
    </div>
  );
}

export default Intro;

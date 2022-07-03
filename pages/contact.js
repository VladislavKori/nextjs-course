import styles from '../styles/Contact.module.css'
import Circle from '../components/Circle'

function contact() {
  return (
    <div className={styles.container}>
        <Circle background="green" left="-40vh" top="-20vh" />
        <Circle background="yellow" right="-30vh" bottom="-60vh" />
        <h1 className={styles.title}>GET IN TOUCH</h1>
        <form className={styles.form}>
            <input className={styles.inputS} placeholder="Username" />
            <input className={styles.inputS} placeholder="Phone" />
            <input className={styles.inputL} placeholder="Email" />
            <input className={styles.inputL} placeholder="Subject" />
            <textarea className={styles.textarea} placeholder="Message" rows={6} />
            <button className={styles.button} >SUBMIT</button>
        </form>
    </div>
  )
}

export default contact
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    < div className={styles.page} >

      <img src="shead.jpg" className={styles.about}></img>

      <img src="shead1.jpg" className={styles.im1}></img>

      <p className={styles.im2}>WELCOME TO MEDIPAL </p>
      <p className={styles.im3}>BEST CARE FOR YOUR GOOD HEALTH </p>
      <p className={styles.im4}>WHAT WE OFFER</p>
      <p className={styles.im5}> * An overview of different hospitals which provides a better chance at healthcare</p>
      <p className={styles.im5}> * Find doctors by their specialities</p>
      <p className={styles.im5}> * Book appointments online</p>
      <p className={styles.im5}> * Get an overview of services offered by different hsopitals</p>

    </div>

  );
}

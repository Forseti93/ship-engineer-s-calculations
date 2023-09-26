import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Formulas</h1>

        <div className={styles.grid}>
          <a href="/bunkering" className={styles.card + " card"}>
            <h3>Bunkering calculations &rarr;</h3>
            <p>To find MT, Corrected density</p>
          </a>
        </div>
      </main>
    </div>
  );
}

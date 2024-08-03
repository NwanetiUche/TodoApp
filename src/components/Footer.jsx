import styles from "./footer.module.css";
export default function Footer({ completedtexts, totaltexts }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>
        Completed Todo:{completedtexts}
        <span className={styles.item}>Total Todos:{totaltexts}</span>
      </span>
    </div>
  );
}

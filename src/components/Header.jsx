import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.headsub}>My Todo List</div>
    </div>
  );
}

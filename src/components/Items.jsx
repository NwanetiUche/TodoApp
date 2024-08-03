import styles from "./Items.module.css";
export default function Items({ item, texts, setTexts }) {
  function buttonDelete(item) {
    console.log("Delete button clicked", item);
    setTexts(texts.filter((text) => text !== item));
  }
  function itemClick(name) {
    const newB = texts.map((text) =>
      text.name === name ? { ...text, done: !text.done } : text
    );
    setTexts(newB);
    console.log(texts);
  }
  const linetrough = item.done ? styles.completed : "";

  return (
    <div className={styles.todoItems}>
      <div className={styles.todoItemsName}>
        <span className={linetrough} onClick={() => itemClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => buttonDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}

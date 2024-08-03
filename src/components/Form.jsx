import styles from "./Form.module.css";
import { useState } from "react";
export default function Form({ texts, setTexts }) {
  const [text, setText] = useState({ name: "", done: false });

  function button(e) {
    e.preventDefault();
    setTexts([...texts, text]);
    setText({ name: "", done: false });
  }
  return (
    <form className={styles.form} onSubmit={button}>
      <div className={styles.inputContainer}>
        <input
          className={styles.moderninput}
          onChange={(e) => setText({ name: e.target.value, done: false })}
          type="text"
          placeholder="Enter Todo Item...."
          value={text.name}
        />

        <button className={styles.modernButton} onClick={button} type="button">
          Add
        </button>
      </div>
    </form>
  );
}

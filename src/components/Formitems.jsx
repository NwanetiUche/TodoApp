import styles from "./Formitems.module.css";
import Items from "./Items";
export default function Formitems({ texts, setTexts }) {
  const sortedTexts = texts
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTexts.map((item) => (
        <Items key={item.name} item={item} texts={texts} setTexts={setTexts} />
      ))}
      {console.log(texts)}
    </div>
  );
}

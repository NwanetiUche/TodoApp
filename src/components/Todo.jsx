import { useState } from "react";
import Footer from "./Footer";
import Form from "./form";
import Formitems from "./Formitems";

function Todo() {
  const [texts, setTexts] = useState([]);
  const completedtexts = texts.filter((text) => text.done).length;
  const totaltexts = texts.filter((text) => text).length;
  // or totaltexts=text.length;

  return (
    <div className="Todo">
      <Form texts={texts} setTexts={setTexts} />
      <Formitems texts={texts} setTexts={setTexts} />
      <Footer completedtexts={completedtexts} totaltexts={totaltexts} />
    </div>
  );
}

export default Todo;

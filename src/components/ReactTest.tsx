import styles from "./reacttest.module.css";
import { CSSTransition } from "react-transition-group";
import { useState, useRef } from "react";

export default function ReactTest() {
  let [showPara, setShowPara] = useState(false);
  const nodeRef = useRef(null);
  let drawerClasses = styles.sideDrawer;
  if (showPara) {
    drawerClasses = styles.sideDrawer + " " + styles.open; //styles.sideDrawer + " " + styles.open;
  }
  return (
    <div className="container">
      <h2>Test</h2>
      <div
        className={
          showPara ? `${styles.sideDrawer} ${styles.open}` : styles.sideDrawer
        }
      >
        <p>This is a paragraph with some text.</p>
        <p>and some more text</p>
      </div>
      <button onClick={() => setShowPara(!showPara)}>Press me</button>
    </div>
  );
}

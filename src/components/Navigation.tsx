import styles from "./navigation.module.css";
import { useState } from "react";

export default function Navigation(props) {
  let [showMenu, setShowMenu] = useState(false);

  function handleBurgerClick() {
    let show = !showMenu;
    setShowMenu(show);
  }

  return (
    <header>
      <nav id="navbar">
        <h1>
          <a href="index.html">
            {props.logo}
            <span className={styles.name}>Louise Høpfner</span>
          </a>
        </h1>
        <div onClick={handleBurgerClick} className={styles.hamburger}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
        <ul className={showMenu ? styles.expanded : styles.closing}>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/louisehopfner/">
              <span
                className="fa-brands fa-linkedin animate pop"
                aria-hidden="true"
              ></span>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/louissse">
              <span
                className="fa-brands fa-github animate pop"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a href="#Resume" className={styles.button}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

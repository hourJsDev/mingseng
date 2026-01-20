import { memo, useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import styles from "./ToTopButton.module.css";

const ToTopButton = memo(() => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      setIsVisible(window.pageYOffset > 500);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        "--y": isVisible ? "0" : "50%",
        "--opacity": isVisible ? 1 : 0,
        "--eventPointer": isVisible ? "auto" : "none",
      }}
      onClick={handleToTop}
      className={styles.container}
    >
      <div className={styles.buttonContainer}>
        <div className={styles.arrowContainer}>
          <span className={styles.arrow}>
            <MdKeyboardArrowUp />
          </span>
          <span className={styles.arrow}>
            <MdKeyboardArrowUp />
          </span>
        </div>
        <div className={styles.dot}></div>
        <div className={styles.button}></div>
      </div>
    </div>
  );
});

export default ToTopButton;

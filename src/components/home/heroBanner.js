import React from "react";
import styles from "@/components/home/styles/heroBanner.module.css";

function hero() {
  return (
    <>
      <div className={styles.hero_con}>
        <div className={styles.hero_row}>
          <div className={styles.left_side}>
            <div className={styles.text_div}>
              <p className={styles.hr_line}></p>
              <p className={styles.paragraph_left}>OUR BESTSELLERS</p>
            </div>
            <h1 className={styles.h1_left}>Latest Arrivals</h1>
            <div className={styles.text_div}>
              <p className={styles.btn_left}>
                <a>SHOP NOW</a>
              </p>
              <p className={styles.hr_line}></p>
            </div>
          </div>
          <div className={styles.right_side}></div>
        </div>
      </div>
    </>
  );
}

export default hero;

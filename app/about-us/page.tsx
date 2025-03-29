"use client"

import styles from "./about-us.module.css";
import Animation from "../components/animation";


export default function AboutUs() {
  return (
    <div className={styles.container}>
        <div className={styles.about_box}>
          <h1>
             About Us
          </h1>
          <p>
          
          </p>
        </div>
        <div className={styles.animation_box}>
            <Animation />
        </div>
    </div>
  )
}
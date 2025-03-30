import styles from "./about-us.module.css";

export const metadata = {
  title: 'ABOUT US',
}

export default function AboutUs() {
  return (
    <div className={styles.container}>
        <h1>
          About Us
        </h1>
        <div className={styles.about_box}>
          <p>next.js 학습용 프로젝트입니다.</p>
        </div>
    </div>
  )
}
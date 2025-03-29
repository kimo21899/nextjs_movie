import styles from "./about-us.module.css";

export const metadata = {
  title: 'ABOUT US',
}
export default function AboutUs() {
  return (
    <div className={styles.container}>
        <div className={styles.about_box}>
          <h1>
             About Us
          </h1>
        </div>
    </div>
  )
}
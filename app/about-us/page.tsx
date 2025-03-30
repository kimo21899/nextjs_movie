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
        <div className="p-4">
          <h1 className="w-full font-medium h-5 flex text-base">
              Hello Tailwindcss
          </h1>
        </div>
    </div>
  )
}
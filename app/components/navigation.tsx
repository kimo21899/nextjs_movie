import Link from "next/link";

export default function Navigation() {
  return  (
    <div>
      <ul>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/movies">MOVIES</Link></li>
        <li><Link href="/about-us">ABOUT US</Link></li>
      </ul>
    </div>
  )
}
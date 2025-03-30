import "./global.css";
import { Metadata } from "next"
import Footer from "./components/footer/footer"
import Navigation from "./components/navigation"

export const metadata : Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: 'The best movies on the best framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

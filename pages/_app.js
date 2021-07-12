import Header from "../components/Header"
import "../styles/globals.css"
import { useEffect } from "react"
import { analytics } from "../utils/firebase"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      analytics()
    }
  }, [])

  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp

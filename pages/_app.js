
import { SideNav , NavBar , Footer } from "../components"
import "../styles/cssAssets.css"
import "../styles/variables.css"
import "../styles/globals.css"

import "../styles/app.css"



export default function App({ Component, pageProps }) {
  return (
    <>
    <main className="screen-master flex mx-auto  border-top ">
        <SideNav />
        <section className="content-wrapper border-left border-bottom  border-right  ">
          <NavBar />
          <Component {...pageProps} />
        </section>
      
    </main>
    {/* <Footer /> */}
    </>
  );
}
 
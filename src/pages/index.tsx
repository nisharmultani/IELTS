import * as React from "react"

import Footer from "../components/comman/footer"
import MasterHeader from "../components/comman/masterHeader"
import HeroHeader from "../components/comman/heroHeader"
// import 'styles/tailwind.scss'


const IndexPage = () => (
  <>
    <MasterHeader />
    <main>
      <HeroHeader />
      <h1 className="text-red-500 h1"> lets learn together</h1>
      <h3> nishar from staging</h3>
      <h3> nishar from feat</h3>

    </main>
    <Footer />
  </>
)

export default IndexPage


import { Suspense } from "react"
import HeroSection from "./components/HeroSection"
import Nav from "./components/Nav"

import Technology from "./components/TechnologiesSection/Technology"
import Footer from "./components/Footer"


function App() {
  const TechnologyPromise = fetch("/data.json")
    .then(res => res.json())


  return (
    <>
     
    <Nav></Nav>
    <HeroSection></HeroSection>
   <Suspense fallback={<div>Loading...</div>}>
     <Technology TechnologyPromise={TechnologyPromise}></Technology>
   </Suspense>
   <Footer></Footer>
    
    </>
  )
}

export default App

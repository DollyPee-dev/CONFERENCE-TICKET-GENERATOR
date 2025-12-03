import { Routes, Route } from "react-router-dom"
import Form from "./components/Form"
import Hero from "./components/Hero"
import circle from '/assets/images/pattern-circle.svg'
import lines from '/assets/images/pattern-lines.svg'
import pattern1 from '/assets/images/pattern-squiggly-line-bottom-desktop.svg'
import pattern2 from '/assets/images/pattern-squiggly-line-top.svg'
import Tickets from "./components/Tickets"


const App = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-center min-h-[100vh] py-10 relative overflow-hidden">
      <div className="container">
        <Routes>
          <Route path="/" element={<Hero />}>
          </Route>
          <Route path="/ticket" element={<Tickets />} />
        </Routes>
      </div>
      <img src={circle} alt="" className="absolute right-[25%] w-[150px] top-1/2 -translate-y-1/2 z-0" />
      <img src={lines} alt="" className="absolute top-0 z-0 max-h-[700px] opacity-60" />
      <img src={pattern1} alt="" className="absolute bottom-0 w-full max-w-[680px]" />
      <img src={pattern2} alt="" className="absolute top-16 right-0 w-full max-w-[300px]" />

    </div>
  )
}

export default App
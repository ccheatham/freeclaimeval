import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { VscLaw } from "react-icons/vsc";
import './App.css';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
  <Router>
    <Switch>
      <Route path="/about">
        <div />
      </Route>
      <Route path="/contact">
        <div />
      </Route>
      <Route path="/privacy">
        <div />
      </Route>
      <Route path="/">
        <div className="hero md:overflow-auto">
          <div className="grid grid-cols-2">
            <div className="mt-0 pt-0 pt-1.5 pl-5 text-lg text-gray-100">
              <VscLaw className="mt-2 ml-5 lg:ml-10" style={{ color: "#fff", width: "60px", height: "60px" }} />
            </div>
            <div className="grid grid-flow-col place-content-end mt-0 pt-2 pb-3 mr-5">
              <button className="hamburger" onClick={handleToggle}>
                {navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#fff", width: "40px", height: "40px" }} />
                )}
              </button>
              <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <li><Link onClick={() => closeMenu()} to="/">About</Link></li>
                <li><Link onClick={() => closeMenu()} to="/">Contact</Link></li>
                <li><Link onClick={() => closeMenu()} to="/">Privacy</Link></li>
              </ul>
              <div className="topMenu font-semibold hover:underline text-lg text-gray-100 pl-1 pr-10 cursor-pointer">About</div>
              <div className="topMenu font-semibold hover:underline text-lg text-gray-100 pl-1 pr-10 cursor-pointer">Contact</div>
              <div className="topMenu font-semibold hover:underline text-lg text-gray-100 pl-1 pr-5 cursor-pointer">Privacy</div>
            </div>
          </div>
          <div className="font-sans grid grid-cols-1 mb-10 lg:grid-cols-2 lg:content-start">
            <div className="text-left w-full">
              <h1 className="text-4xl font-sans text-zinc-100 mt-5 pl-10 mr-10 md:leading-snug md:text-5xl lg:pt-14 lg:mt-1 lg:pl-20">
                Baby Formula Linked To Necrotizing Enterocolitis in Premature Infants
              </h1>
              <h3 className="text-xl leading-relaxed md:text-2xl font-sans text-zinc-100 pt-14 pl-10 lg:mt-0 mr-8 lg:mr-0 lg:pl-20">
                Necrotizing enterocolitis (NEC) is the most common and serious intestinal disease among premature babies.
                It happens when tissue in the small or large intestine is injured or inflamed. The use of cow-milk based
                infant formula has been shown to cause severe cases of NEC. NEC leads to a buildup of acid in their stomach
                that causes intestinal tissue to die and bacteria to spread causing an infection which their underdeveloped
                immune systems may not be able to overcome.
              </h3>
              <h3 className="text-xl leading-relaxed md:text-2xl font-sans text-zinc-100 pt-14 pl-10 lg:mt-0 mb-0 mr-8 lg:mr-0 lg:pl-20">
                NEC attacks suddenly, acutely, and progresses rapidly. Many babies with NEC undergo surgery. Some are left
                disabled. Some (an estimated 10-28%) even lose their lives.
              </h3>
            </div>
            <div className="text-left w-full lg:max-w-4xl">
              <div className="">
                <h1 className="text-4xl font-sans text-amber-300 pt-14 pl-10 lg:pl-20">
                  Let us help.
                </h1>
                <h3 className="text-2xl text-slate-100 pt-5 pl-10 pr-5 lg:pl-20 ">
                  Receive a free case evaluation to determine compensation eligibility
                </h3>
                <div className="flex flex-col pt-5 pl-10 pr-5 lg:pl-20">
                  <div className="pb-5">
                    <label className="font-semibold text-lg text-slate-100 block pb-2">Was your child given baby formula or fortifier?*</label>
                    <input className="" type="text"/>
                  </div>
                  <div className="pb-5">
                    <label className="font-semibold text-lg text-slate-100 block pb-2">Was your child born premature?*</label>
                    <input className="" type="text"/>
                  </div>
                  <div className="pb-5">
                    <label className="font-semibold text-lg text-slate-100 block pb-2">Has your child been diagnosed with NEC (Necrotizing Enterocolitis)?*</label>
                    <input className="" type="text"/>
                  </div>
                  <div className="pb-5">
                    <label className="font-semibold text-lg text-slate-100 block pb-2">Year of injury*</label>
                    <input className="" type="text"/>
                  </div>
                  <div className="pb-5">
                    <label className="font-semibold text-lg text-slate-100 block pb-2">State of residency*</label>
                    <input className="" type="text"/>
                  </div>
                  <div className="pt-5 pb-5 text-center">
                    <button className='button btn'>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="xray rounded-lg" />
        </div>
      </Route>
    </Switch>
  </Router>
  )
}
export default App;

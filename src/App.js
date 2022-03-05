import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { VscLaw } from "react-icons/vsc";
import xray from "./xray.png";
import powder2 from "./formula_powder2.jpg";
import bgImage from "./bg.jpg";
import './App.css';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [content, setContent] = useState({});

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }

  useEffect(() => {
    const getContent = async () => {
      const  fetchData = await fetch('/.netlify/functions/content');
      const data = await fetchData.json();
       setContent(data.content);
    }

    getContent()
  }, [])

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
          <div className="text-pink-400">
          </div>
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
                {content?.splashTextTitle}
              </h1>
              <h3 className="custom-leading text-xl leading-relaxed md:text-2xl font-sans text-zinc-100 pt-14 pl-10 lg:mt-0 mr-8 lg:mr-0 lg:pl-20">
                {content?.splashSubText1}
              </h3>
              <h3 className="custom-leading text-xl leading-relaxed md:text-2xl font-sans text-zinc-100 pt-14 pl-10 lg:mt-0 mb-0 mr-8 lg:mr-0 lg:pl-20">
                {content?.splashSubText2}
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
        <div className="grid grid-cols-2">
          <div className="col-span-2 m-auto pl-10 pt-10">
            <h6 className=" text-gray-500 text-4xl md:text-3xl pb-4 font-medium">What Are the Signs & Symptoms of Necrotizing Enterocolitis?</h6>
            <h6 className=" text-gray-500 hidden text-2xl md:text-2xl lg:inline-flex font-medium">A baby with necrotizing enterocolitis might have these symptoms:</h6>
          </div>
          <div className="pl-10 pr-10 pb-10 col-span-2 lg:col-span-1 pt-10">
            <img src={xray} alt="xray" className="rounded-lg m-auto max-h-fit"/>
          </div>
          <div className="ml-12 mr-10 mt-10 col-span-2 lg:col-span-1">
            <h6 className="text-2xl md:text-4xl text-gray-500 lg:hidden ">A baby with necrotizing enterocolitis might have these symptoms:</h6>
            <ul className="leading-relaxed ml-10 text-gray-500 list-disc list-outside pt-10 text-lg md:text-2xl font-normal">
              <li>a swollen, red, or tender belly</li>
              <li>trouble feeding</li>
              <li>food staying in the stomach longer than expected</li>
              <li>constipation</li>
              <li>diarrhea and/or dark or bloody stools (poop)</li>
              <li>being less active or lethargic</li>
              <li>a low or unstable body temperature</li>
              <li>green vomit (containing bile)</li>
              <li>apnea (pauses in breathing)</li>
              <li>bradycardia (slowed heart rate)</li>
              <li>hypotension (low blood pressure)</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="ml-10 mr-10 mt-5 lg:mt-10 col-span-2 lg:col-span-1 lg:hidden">
            <img src={powder2} alt="xray" className="m-auto lg:ml-0"/>
          </div>
          <div className="custom-leading md:pl-10 pt-10 pr-10 pb-10 pl-10 col-span-2 lg:col-span-1 text-gray-500 pt-18 text-lg md:text-2xl font-medium">
            A growing body of convincing scientific research has established that feeding cow’s milk-based formula to
            premature infants dangerously increases the baby’s risk of developing necrotizing enterocolitis (NEC),
            but Abbott and Mead Johnson continue to advertise that Similac and Enfamil are specifically designed for
            premature babies and safe to consume. They have known or should have known for years that their products
            pose a substantial risk of NEC to newborns. Instead of communicating this information to parents and healthcare
            providers, they’ve chosen to put profits over people.
          </div>
          <div className="hidden ml-0 mr-10 mt:5 md:mt-10 col-span-2 md:col-span-1 lg:inline-flex">
            <img src={powder2} alt="xray" className="m-auto md:ml-0 max-h-fit"/>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="pl-10 pr-10 pb-10 col-span-2 lg:col-span-1 pt-10">
            <img src={bgImage} alt="xray" className="rounded-lg m-auto max-h-fit"/>
          </div>
          <div className="custom-leading md:pl-10 pt-10 pr-10 pb-10 pl-10 col-span-2 lg:col-span-1 text-gray-500 pt-18 text-lg md:text-2xl font-medium">
            If your baby was one of the thousands born premature or with very low birth weight each year in the United States,
            he or she was likely fed high calorie, cow’s milk-based formula in the hospital or NICU to supplement or replace
            human milk feedings. Enfamil (made by Mead Johnson Nutrition) and Similac (made by Abbott Laboratories) are the
            two most popular such formulas linked to a significantly increased risk of your baby developing NEC.
          </div>
        </div>
        <div className="compensation md:overflow-auto">
          <div className="font-sans grid grid-cols-1 mb-10 2xl:grid-cols-2 lg:content-start">
            <div className="text-left w-full">
              <h1 className="text-4xl font-sans text-zinc-100 mt-5 pl-10 mr-10 md:leading-snug md:text-5xl lg:pt-14 lg:mt-1 lg:pl-20">
                Seek Compensation
              </h1>
              <h3 className="custom-leading text-xl md:text-2xl font-sans text-zinc-100 pt-14 pl-10 lg:mt-0 mr-8 lg:mr-0 lg:pl-20">
                It costs anywhere between $10,000 to $50,0000 to treat a baby with NEC. Medical bills pile up quickly, and they may
                continue to stack up – babies who recover from NEC can suffer lifelong complications. Meanwhile, the manufacturers
                of these dangerous products continue to profit from selling them to unsuspecting parents.
              </h3>
              <h3 className="custom-leading text-xl md:text-2xl font-sans text-zinc-100 pt-14 pl-10 lg:mt-0 mb-0 mr-8 lg:mr-0 lg:pl-20">
                If your baby was born prematurely, diagnosed with NEC, and used Enfamil or Similac formula, we may
                be able to help. Mr. Barlow has decades of experience in the area of consumer protection and has
                been at the forefront of litigating some of the most challenging and significant consumer protection
                cases in the country. In so doing, he has secured hundreds of millions of dollars in compensation on
                behalf of his clients through jury verdicts and settlements.
              </h3>
              <h3 className="custom-leading text-xl md:text-2xl font-sans text-zinc-100 pt-14 pl-10 lg:mt-0 mb-0 mr-8 lg:mr-0 lg:pl-20">
                Anyone who believes they may have been affected by these products should contact an attorney as
                soon as possible to determine if they have a claim. Complete our intake form or call us
                today for a free consultation.
              </h3>
            </div>
            <div className=" pt-20 pb-20 m-auto 2xl:grid-cols-2">
              <button className='round-button text-lg lg:text-2xl btn'>Start Claim Evaluation Now</button>
            </div>
            <div className="pt-24 pb-5 m-auto col-span-1 2xl:col-span-2 text-gray-500">
              Copyright 2022
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  </Router>
  )
}
export default App;

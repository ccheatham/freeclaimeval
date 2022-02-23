import './App.css';

function App() {
  return (
  <div className="hero overflow-auto">
    <div className="grid grid-cols-2 relative">
      <div className="mt-0 pt-0 pt-1.5 pl-5 text-lg text-gray-100">Law Firm Name</div>
      <div className="grid grid-flow-col place-content-end mt-0 pt-2 pb-3 mr-0.5">
        <div className="font-semibold hover:underline text-lg text-gray-100 pl-1 pr-10 cursor-pointer">About</div>
        <div className="font-semibold hover:underline text-lg text-gray-100 pl-1 pr-10 cursor-pointer">Contact</div>
        <div className="font-semibold hover:underline text-lg text-gray-100 pl-1 pr-5 cursor-pointer">Privacy</div>
      </div>
    </div>
    <div className="font-sans grid grid-cols-1 lg:grid-cols-2 lg:content-start mb-10">
      <div className="text-left w-full">
        <h1 className="text-4xl md:leading-snug md:text-5xl font-sans text-zinc-100 pt-14 pl-20 lg:mt-2">
          Baby Formula Linked To Necrotizing Enterocolitis in Premature Infants
        </h1>
        <h3 className="text-xl leading-relaxed md:text-2xl font-sans text-zinc-100 pt-14 pl-20 lg:mt-0">
          Necrotizing enterocolitis (NEC) is the most common and serious intestinal disease among premature babies.
          It happens when tissue in the small or large intestine is injured or inflamed. The use of cow-milk based
          infant formula has been shown to cause severe cases of NEC. NEC leads to a buildup of acid in their stomach
          that causes intestinal tissue to die and bacteria to spread causing an infection which their underdeveloped
          immune systems may not be able to overcome.
        </h3>
        <h3 className="text-xl leading-relaxed md:text-2xl font-sans text-zinc-100 pt-14 pl-20 lg:mt-0 mb-0">
          NEC attacks suddenly, acutely, and progresses rapidly. Many babies with NEC undergo surgery. Some are left
          disabled. Some (an estimated 10-28%) even lose their lives.
        </h3>
      </div>
      <div className="text-left w-full max-w-2xl">
        <div className="">
          <h1 className="text-4xl font-sans text-amber-300 pt-14 pl-20">
            Let us help.
          </h1>
          <h3 className="text-2xl text-slate-100 pt-5 pl-20 pr-5">
            Receive a free case review to determine compensation eligibility
          </h3>
          <div className="flex flex-col pt-5 pl-20 pr-5 w-30">
            <div className="pb-5">
              <label className="text-slate-100 block pb-2">Was your child given baby formula or fortifier?*</label>
              <input className="" type="text"/>
            </div>
            <div className="pb-5">
              <label className="text-slate-100 block pb-2">Was your child born premature?*</label>
              <input className="" type="text"/>
            </div>
            <div className="pb-5">
              <label className="text-slate-100 block pb-2">Has your child been diagnosed with NEC (Necrotizing Enterocolitis)?*</label>
              <input className="" type="text"/>
            </div>
            <div className="pb-5">
              <label className="text-slate-100 block pb-2">Year of injury*</label>
              <input className="" type="text"/>
            </div>
            <div className="pb-5">
              <label className="text-slate-100 block pb-2">State of residency*</label>
              <input className="" type="text"/>
            </div>
            <div className="pt-5 pb-5 text-center">
              <button className='button'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default App;

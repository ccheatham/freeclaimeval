import './App.css';

function App() {
  return (
  <div className="hero overflow-auto font-sans grid grid-cols-1 lg:grid-cols-2 lg:content-start">
    <div className="text-left w-full">
      <h1 className="text-4xl md:leading-snug md:text-5xl font-sans text-zinc-100 pt-14 pl-20 lg:mt-32">
        Baby Formula Linked To Necrotizing Enterocolitis in Premature Infants
      </h1>
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
  )
}
export default App;

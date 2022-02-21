import logo from './logo.svg';

function App() {
  return (
    <div className="bg-gray-400 ">
      <div className="h-1/2 grid">
        <div className="p-6 max-w-sm mt-1-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
            <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="min-h-screen grid place-items-center bg-violet-300">
        <input type="text" />
      </div>
    </div>
  )
}
export default App;

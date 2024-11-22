import "./App.css";
import Activity from "./components/Dashboard/Activity";
import Bookings from "./components/Dashboard/Bookings";
import Navbar from "./components/Dashboard/Navbar";
import Overview from "./components/Dashboard/Overview";
import Steps from "./components/Dashboard/Steps";

function App() {
  return (
    <div className="bg-slate-50/50">
      <Navbar />
      <Overview />
      <div className="grid grid-cols-12 gap-5 px-20">
        <div className="col-span-5">
          <Steps />
          <Bookings />
        </div>
        <div className="col-span-7"><Activity /></div>
      </div>
    </div>
  );
}

export default App;

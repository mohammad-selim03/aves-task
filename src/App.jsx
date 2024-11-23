import { useState, useEffect } from "react";
import "./App.css";
import Activity from "./components/Dashboard/Activity";
import Bookings from "./components/Dashboard/Bookings";
import Navbar from "./components/Dashboard/Navbar";
import Overview from "./components/Dashboard/Overview";
import Steps from "./components/Dashboard/Steps";

function App() {
  const [properties, setProperties] = useState([]);

  // Load properties from localStorage on initial render
  useEffect(() => {
    const storedProperties = JSON.parse(localStorage.getItem("properties")) || [];
    setProperties(storedProperties);
  }, []);

  const addProperty = (newProperty) => {
    const updatedProperties = [...properties, newProperty];
    setProperties(updatedProperties);
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
  };

  return (
    <div className="bg-slate-50/50">
      <Navbar />
      <Overview addProperty={addProperty} properties={properties} />
      <div className="grid grid-cols-12 gap-5 px-20">
        <div className="col-span-5">
          <Steps />
          <Bookings />
        </div>
        <div className="col-span-7">
          <Activity properties={properties} />
        </div>
      </div>
    </div>
  );
}

export default App;

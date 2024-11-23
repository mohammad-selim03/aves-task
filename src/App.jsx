import { useState, useEffect } from "react";
import "./App.css";
import Property from "./components/Dashboard/Property";
import Bookings from "./components/Dashboard/Bookings";
import Navbar from "./components/Dashboard/Navbar";
import Overview from "./components/Dashboard/Overview";
import Steps from "./components/Dashboard/Steps";

function App() {
  const [properties, setProperties] = useState([]);

  // Load properties from localStorage on initial render
  useEffect(() => {
    const storedProperties =
      JSON.parse(localStorage.getItem("properties")) || [];
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
      <Overview properties={properties} />
      <div className="flex flex-col md:grid md:grid-cols-12 gap-5 px-3 lg:px-20">
        <div className=" md:col-span-5">
          <Steps />
          <Bookings />
        </div>
        <div className=" md:col-span-7">
          <Property properties={properties} addProperty={addProperty} />
        </div>
      </div>
    </div>
  );
}

export default App;

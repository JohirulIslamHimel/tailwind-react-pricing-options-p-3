import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Component/DaisyNav/DaisyNav";
import NavBar from "./Component/NavBar/NavBar";
import PricingOptions from "./Component/PricingOptions/PricingOptions";
import ResultChart from "./Component/ResultsChart/ResultChart";
import axios from "axios";
import MarksChart from "./Component/MarksChart/MarksChart";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

const marksPromise = axios.get("marksData.json");
function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;

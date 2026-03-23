import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Component/DaisyNav/DaisyNav";
import NavBar from "./Component/NavBar/NavBar";
import PricingOptions from "./Component/PricingOptions/PricingOptions";
import ResultChart from "./Component/ResultsChart/ResultChart";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

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

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;

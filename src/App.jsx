import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Redlight from "./components/Redlight";
import StopWatch from "./components/StopWatch";
import Counter from "./components/counter/Counter";
import Cat from "./components/cat/Cat";
import Carsoul from "./components/carsoul/Carsoul";
import SearchName from "./components/searchName/SearchName";
import Accordian from "./components/accordian/Accordian";
import Content from "./components/content/Content";
// import BackgroundChanger from "./components/background/BackgroundChanger";
import { Carsoul12, SearchByName } from "./components/Practice";
import Shopping from "./components/Shopping/Shopping";
import Show from "./components/Offer/Show"
import Name from "./components/name/Name";
function App() {
  return (
    <>
      {/* <Redlight/> */}
      {/* <StopWatch/> */}
      {/* <Counter /> */}
      {/* <Cat/> */}
      {/* <Carsoul /> */}
      {/* <SearchName /> */}
      {/* <Accordian/> */}
      {/* <Content/> */}
      {/* <BackgroundChanger /> */}
      {/* <Carsoul12 /> */}
      {/* <SearchByName/> */}
      {/* <Shopping /> */}
      {/* <Show/> */}
      <Name/>
    </>
  );
}

export default App;

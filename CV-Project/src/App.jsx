// import { useState } from "react";
import InputField from "./components/Input";
import GeneralInformation from "./components/GeneralInformation";
import "./App.css";

function App() {
  return (
    <div className="main-contianer">
      <h1>CJK CV Webpage</h1>
      <h2>Created using Vite, React and Javascript</h2>
      <InputField name="trial" />
      <GeneralInformation name="General" />
    </div>
  );
}

export default App;

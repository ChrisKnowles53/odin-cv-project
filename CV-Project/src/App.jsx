// import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import "./App.css";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="main-contianer">
      <h1>CJK's CV Webpage</h1>
      <h2>Created using Vite, React and Javascript</h2>
      <GeneralInformation section="General Information" />
      <Education section="Education" />
      <WorkExperience section="Work Experience" />
    </div>
  );
}

export default App;

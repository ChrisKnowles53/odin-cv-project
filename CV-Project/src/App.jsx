// import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import "./App.css";
import WorkExperience from "./components/WorkExperience";

// add a function to reset the whole form

function App() {
  return (
    <div className="mainContainer">
      <h1>CJK's CV Webpage</h1>
      <div className="content">
        <div className="section">
          <GeneralInformation section="General Information" />
          <Education section="Education" />
          <WorkExperience section="Work Experience" />
        </div>
        <div className="section">
          <h2>Section to display in a format that i like</h2>
        </div>
      </div>
    </div>
  );
}

export default App;

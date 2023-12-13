// import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import "./App.css";
import WorkExperience from "./components/WorkExperience";
// add a function to reset the whole form

function App() {
  return (
    <div className="mainContainer">
      <h1>CJK CV Webpage</h1>
      <div className="content">
        <div className="section">
          <GeneralInformation section="General Information" />
          <hr />
          <Education section="Education" />
          <hr />
          <WorkExperience section="Work Experience" />
        </div>
        <div className="section">
          <h2>Section to display in a format that i like</h2>
          <div className="displayGeneralInformation">
            <h2>General Information</h2>
            <p className="generalDetails"></p>
          </div>
          <div className="displayEducation">
            <h2>Education</h2>
            <p className="educationDetails"></p>
          </div>
          <div className="displayWorkExperience">
            <h2>Work Experience</h2>
            <p className="workExperienceDetails"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

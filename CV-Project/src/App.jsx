// import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import "./App.css";
import WorkExperience from "./components/WorkExperience";
import { useState } from "react";
// add a function to reset the whole form

function App() {
  const [firstName, setFirstName] = useState("Enter your first name");
  const [surname, setSurname] = useState("Enter your surname");
  const [email, setEmail] = useState("Enter your email");
  const [phoneNumber, setPhoneNumber] = useState("Enter phone number");

  return (
    <div className="mainContainer">
      <h1>CJK CV Webpage</h1>
      <div className="content">
        <div className="inputSection">
          <GeneralInformation
            section="General Information"
            firstName={firstName}
            setFirstName={setFirstName}
            surname={surname}
            setSurname={setSurname}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
          <hr />
          <Education section="Education" />
          <hr />
          <WorkExperience section="Work Experience" />
        </div>
        <div className="displaySection">
          <h2>Section to display in a format that i like</h2>
          <div className="displayGeneralInformation">
            <h2>General Information</h2>
            <p className="generalDetails">
              {firstName} {surname} {email} {phoneNumber}
            </p>
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

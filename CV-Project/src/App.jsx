// import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import "./App.css";
import WorkExperience from "./components/WorkExperience";
import { useState } from "react";
import Button from "./components/Button";
// add a function to reset the whole form

function App() {
  const [firstName, setFirstName] = useState("Enter your first name");
  const [surname, setSurname] = useState("Enter your surname");
  const [email, setEmail] = useState("Enter your email");
  const [phoneNumber, setPhoneNumber] = useState("Enter phone number");

  const [savedFirstName, setSavedFirstName] = useState("");
  const [savedSurname, setSavedSurname] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPhoneNumber, setSavedPhoneNumber] = useState("");

  const [schoolName, setSchoolName] = useState("School Name");
  const [subjectStudied, setSubjectStudied] = useState("Subject Studied");
  const [graduationDate, setGraduationDate] = useState("Graduation Date");

  const [savedSchoolName, setSavedSchoolName] = useState("");
  const [savedSubjectStudied, setSavedSubjectStudied] = useState("");
  const [savedGraduationDate, setSavedGraduationDate] = useState("");

  const handleButtonClick = (actionType) => {
    if (actionType == "save") {
      handleSave();
    } else if (actionType === "edit") {
      handleEdit();
    }
  };

  const handleSave = () => {
    setSavedFirstName(firstName);
    setSavedSurname(surname);
    setSavedEmail(email);
    setSavedPhoneNumber(phoneNumber);
    setSavedSchoolName(schoolName);
    setSavedSubjectStudied(subjectStudied);
    setSavedGraduationDate(graduationDate);
  };

  const handleEdit = () => {
    console.log("edit button clicked");
  };

  return (
    <div className="mainContainer">
      <h1>CJK CV Webpage</h1>
      <Button text="Save" onClick={handleButtonClick} actionType="save" />
      <Button text="Edit" onClick={handleButtonClick} actionType="edit" />
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
            handleSave={handleSave}
          />
          <hr />
          <Education
            section="Education"
            schoolName={schoolName}
            subjectStudied={subjectStudied}
            graduationDate={graduationDate}
            setSchoolName={setSchoolName}
            setSubjectStudied={setSubjectStudied}
            setGraduationDate={setGraduationDate}
          />
          <hr />
          <WorkExperience section="Work Experience" />
        </div>
        <div className="displaySection">
          <div className="displayGeneralInformation">
            <h2>General Information</h2>
            <p className="generalDetails">
              {savedFirstName} {savedSurname}
              <br /> {savedEmail}
              <br /> {savedPhoneNumber}
            </p>
          </div>
          <div className="displayEducation">
            <h2>Education</h2>
            <p className="educationDetails">
              {savedSchoolName} {savedGraduationDate} <br />
              {savedSubjectStudied}
            </p>
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

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import InputField from "./Input";
import Button from "./Button";
import DateInputField from "../DateInput";

export default function Education({ section }) {
  const [schoolName, setSchoolName] = useState("School Name");
  const [subjectStudied, setSubjectStudied] = useState("Subject Studied");
  const [graduationDate, setGraduationDate] = useState("Graduation Date");

  function handleClick() {
    //do somethign with handle click
  }

  return (
    <div className={section}>
      <h2>{section}</h2>
      <InputField name={schoolName} label="School Name" />
      <InputField name={subjectStudied} label="Subject" />
      <DateInputField name={graduationDate} label="Graduation Date" />
      <Button text="Save" handleClick={handleClick} />
      <Button text="Edit" />
    </div>
  );
}

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import InputField from "./Input";
import Button from "./Button";
import DateInputField from "./DateInput";

export default function Education({
  section,
  schoolName,
  subjectStudied,
  graduationDate,
  setSchoolName,
  setSubjectStudied,
  setGraduationDate,
}) {
  return (
    <div className={section}>
      <h2>{section}</h2>
      <InputField
        name={schoolName}
        setName={setSchoolName}
        label="School Name"
      />
      <br />
      <InputField
        name={subjectStudied}
        setName={setSubjectStudied}
        label="Subject"
      />
      <br />
      <DateInputField
        name={graduationDate}
        setName={setGraduationDate}
        label="Graduation Date"
      />
      <br />
    </div>
  );
}

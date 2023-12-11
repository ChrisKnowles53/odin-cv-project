import { useState } from "react";
import InputField from "./Input";

export default function Education({ section }) {
  const [schoolName, setSchoolName] = useState("School Name");
  const [subjectStudied, setSubjectStudied] = useState("Subject Studied");
  const [graduationDate, setGraduationDate] = useState("Graduation Date");

  return (
    <div className={section}>
      <h2>{section}</h2>
      <InputField name={schoolName} label="School Name" />
      <InputField name={subjectStudied} label="Subject" />
      <InputField name={graduationDate} label="Graduation Date" />
    </div>
  );
}

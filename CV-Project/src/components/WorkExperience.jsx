/* eslint-disable react/prop-types */
// import { useState } from "react";
import InputField from "./Input";
import DateInputField from "./DateInput";
import React from "react";

export default function WorkExperience({
  section,
  workExperience,
  setWorkExperience,
}) {
  const inputFields = [
    { key: "companyName", label: "Company Name" },
    { key: "position", label: "Position" },
    { key: "title", label: "Title" },
    { key: "mainResponsibilities", label: "Main Responsibilities" },
  ];

  const handleInputChange = (key, value) => {
    setWorkExperience((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  return (
    <div className={section}>
      <h2>{section}</h2>
      {inputFields.map((field) => (
        <React.Fragment key={field.key}>
          <InputField
            name={workExperience[field.key]}
            label={field.label}
            setName={(value) => handleInputChange(field.key, value)}
            onChange={(event) =>
              handleInputChange(field.key, event.target.value)
            }
          />
          <br />
        </React.Fragment>
      ))}

      <DateInputField label="Date from" />
      <DateInputField label="Date to" />
    </div>
  );
}

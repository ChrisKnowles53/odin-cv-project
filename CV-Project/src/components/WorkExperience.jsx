/* eslint-disable react/prop-types */
import { useState } from "react";
import InputField from "./Input";
import DateInputField from "../DateInput";
import React from "react";

export default function WorkExperience({ section }) {
  const [formData, setFormData] = useState({
    companyName: "Enter company name",
    position: "Enter position",
    title: "Enter title",
    mainResponsibilities: "Enter main responsibilities",
  });
  const inputFields = [
    { key: "companyName", label: "Company Name" },
    { key: "position", label: "Position" },
    { key: "title", label: "Title" },
    { key: "mainResponsibilities", label: "Main Responsibilities" },
  ];

  const handleInputChange = (key, value) => {
    setFormData((prevFormData) => ({
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
            name={formData[field.key]}
            label={field.label}
            onChange={(event) =>
              handleInputChange(field.key, event.target.value)
            }
          />
          <br />
        </React.Fragment>
      ))}

      <DateInputField label="Date from" />
      <br />
      <DateInputField label="Date to" />
    </div>
  );
}

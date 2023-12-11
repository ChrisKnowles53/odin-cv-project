import { useState } from "react";
import InputField from "./Input";
import Button from "./Button";

export default function WorkExperience({ section }) {
  const [formData, setFormData] = useState({
    companyName: "Enter company name",
    position: "Enter position",
    title: "Enter title",
    mainResponsibilities: "Enter main responsibilities",
    dateFrom: "Enter start date",
    dateTo: "Enter end date",
  });
  const inputFields = [
    { key: "companyName", label: "Company Name" },
    { key: "position", label: "Position" },
    { key: "title", label: "Title" },
    { key: "mainResponsibilities", label: "Main Responsibilities" },
    { key: "dateFrom", label: "Date From" },
    { key: "dateTo", label: "Date To" },
  ];

  const handleInputChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  function handleClick() {
    // do something with the click
  }

  return (
    <div className={section}>
      <h2>{section}</h2>
      {inputFields.map((field) => (
        <InputField
          key={field.key}
          name={formData[field.key]}
          label={field.label}
          onChange={(event) => handleInputChange(field.key, event.target.value)}
        />
      ))}
      <Button text="Save" handleClick={handleClick} />
      <Button text="Edit" />
    </div>
  );
}

import { useState } from "react";
import InputField from "./Input";

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

  return (
    <div className={section}>
      <h2>{section}</h2>
      {inputFields.map((field) => (
        <InputField
          key={field.key}
          name={formData[field.key]}
          label={field.label}
        />
      ))}
    </div>
  );
}

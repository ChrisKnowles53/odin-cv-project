/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import InputField from "./Input";
import Button from "./Button";

export default function GeneralInformation({ section }) {
  const [firstName, setFirstName] = useState("Enter your first name");
  const [surname, setSurname] = useState("Enter your surname");
  const [email, setEmail] = useState("Enter your email");
  const [phoneNumber, setPhoneNumber] = useState("Enter phone number");

  function handleClick() {
    // code for what to do when edit clicked
    // when save clicked i want to update the <p displayContent> within <div displayGenInfo>
  }

  return (
    <div className={section}>
      <h2>{section}</h2>
      <InputField name={firstName} label="First Name" />
      <InputField name={surname} label="Surname" />
      <InputField name={email} label="email" />
      <InputField name={phoneNumber} label="Phone Number" />
      <Button text="Save" handleClick={handleClick} />
      <Button text="Edit" />
    </div>
  );
}

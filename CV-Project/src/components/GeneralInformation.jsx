import { useState } from "react";
import InputField from "./Input";

export default function GeneralInformation({ section }) {
  const [firstName, setFirstName] = useState("Enter your first name");
  const [surname, setSurname] = useState("Enter your surname");
  const [email, setEmail] = useState("Enter your email");
  const [phoneNumber, setPhoneNumber] = useState("Enter phone number");

  return (
    <div className={section}>
      <h2>{section}</h2>
      <InputField name={firstName} label="First Name" />
      <InputField name={surname} label="Surname" />
      <InputField name={email} label="email" />
      <InputField name={phoneNumber} label="Phone Number" />
    </div>
  );
}

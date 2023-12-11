import { useState } from "react";
import InputField from "./Input";

export default function GeneralInformation({ name }) {
  const [firstName, setFirstName] = useState("Enter your first name");
  const [surname, setSurname] = useState("Enter your surname");
  const [email, setEmail] = useState("Enter your email");
  const [phoneNumber, setPhoneNumber] = useState("Enter phone number");

  return (
    <>
      <InputField name={name} />
    </>
  );
}

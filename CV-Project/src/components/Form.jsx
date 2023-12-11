import { useState } from "react";

export default function InputForm({ label }) {
  const [firstName, setFirstName] = useState("Enter your first name");
  const [surname, setSurname] = useState("Enter your surname");
  const [email, setEmail] = useState("Enter your email");
  const [phoneNumber, setPhoneNumber] = useState("Enter phone number");

  return (
    <>
      <form>
        <label htmlFor="html">{label}</label>
        <input type="text" id="html" name="fav_language" value={firstName} />
        <br />
        <label htmlFor="css">{surname}</label>
        <input type="text" id="css" name="fav_language" value={surname} />
        <br />
        <label htmlFor="javascript">{email}</label>
        <input type="text" id="javascript" name="fav_language" value={email} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

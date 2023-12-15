/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import InputField from "./Input";

export default function GeneralInformation({
  section,
  firstName,
  setFirstName,
  surname,
  setSurname,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
}) {
  return (
    <div className={section}>
      <h2>{section}</h2>
      <InputField name={firstName} setName={setFirstName} label="First Name" />
      <br />
      <InputField name={surname} setName={setSurname} label="Surname" />
      <br />
      <InputField name={email} setName={setEmail} label="Email" />
      <br />
      <InputField
        name={phoneNumber}
        setName={setPhoneNumber}
        label="Phone Number"
      />
      <br />
    </div>
  );
}

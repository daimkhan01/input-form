import React from "react";
import Buttons from "../button/Buttons";
import FormRadio from "../elements/radio/FormRadio";
import FormInput from "../elements/input/FormInput";
import FormSelect from "../elements/select/FormSelect";
import FormCheckbox from "../elements/checkbox/FormCheckbox";
import FormTextArea from "../elements/textarea/FormTextArea";

export default function UserForm(props) {
  const country = [
    "America",
    "Benin",
    "Canada",
    "Egypt",
    "Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Sweden",
    "Vietnam",
    "Zimbabwe",
  ];
  return (
    <form
      className="user_form"
      onSubmit={!props.isUpdating ? props.addInputData : props.updateInfo}
    >
      <FormInput
        label="Full Name:"
        type="text"
        name="name"
        value={props.formInput.name}
        onChange={props.inputEvent}
        placeholder="Enter a name..."
      />
      <FormInput
        label="Age:"
        type="number"
        placeholder="Enter your age"
        name="age"
        min="0"
        value={props.formInput.age}
        onChange={props.inputEvent}
      />

      <div>
        Gender :
        <FormRadio
          label="Male"
          name="gender"
          value="Male"
          onChange={props.inputEvent}
          checked={props.formInput.gender === "Male"}
        />
        <FormRadio
          label="Female"
          name="gender"
          value="Female"
          onChange={props.inputEvent}
          checked={props.formInput.gender === "Female"}
        />
      </div>

      <div>
        Hobbies :
        <FormCheckbox
          label="Cricket"
          name="hobbies"
          value="cricket"
          onChange={props.inputEvent}
          checked={props.formInput.hobbies.includes("cricket")}
        />
        <FormCheckbox
          label="Football"
          name="hobbies"
          value="football"
          onChange={props.inputEvent}
          checked={props.formInput.hobbies.includes("football")}
        />
      </div>

      <FormSelect
        label="Nationality:"
        name="nationality"
        value={props.formInput.nationality}
        onChange={props.inputEvent}
        options={country}
      />

      <FormTextArea
        label="Your Message:"
        name="message"
        placeholder="Type your message here..."
        value={props.formInput.message}
        onChange={props.inputEvent}
      />

      <Buttons isUpdating={props.isUpdating} resetForm={props.resetForm} />
    </form>
  );
}

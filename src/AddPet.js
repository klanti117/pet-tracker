import React, { useState } from "react";

const petOption = [
  { value: "cat", label: "Cat" },
  { value: "dog", label: "Dog" },
  { value: "bird", label: "Bird" },
];

const AddPet = ({ onAdd }) => {
  const [petName, setPetName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [species, setSpecies] = useState(null);
  const [isFriendly, setIsFriendly] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ petName, profilePicture, species, isFriendly });
    //to Clear form
    setPetName("");
    setProfilePicture("");
    setSpecies(null);
    setIsFriendly(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add a new Pet!</h2>
      <label>
        Pet name <span style={requiredFields}>*</span>:
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
        />
      </label>
      <label>
        Profile picture<span style={requiredFields}>*</span>
        <input
          type="text"
          placeholder="Picture URL"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          required
        />
      </label>
      <fieldset>
        <legend>
          Species<span style={requiredFields}>*</span>
        </legend>
        {/* <labe>
          <input
            type="radio"
            name="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            required
          />
          Cat
        </labe>
        <br />
        <labe>
          <input
            type="radio"
            name="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            required
          />
          Dog
        </labe>
        <br />
        <label>
          <input
            type="radio"
            name="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            required
          />
          Bird
        </label>
        <br /> */}
        {petOption.map((x, i) => (
          <label key={i}>
            <input
              type="radio"
              name="species"
              value={x.value}
              onChange={(e) => setSpecies(e.target.value)}
            />
            {x.label}
          </label>
        ))}
      </fieldset>
      <label>
        <input
          type="checkbox"
          value={isFriendly}
          onChange={(e) => setIsFriendly(e.currentTarget.checked)}
        />
        Are They Friendly?
      </label>
      <input type="submit" value="Add Pet!" />
    </form>
  );
};

const requiredFields = {
  color: "red",
};

export default AddPet;

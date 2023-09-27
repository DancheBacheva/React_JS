//?Da napravime slicen primer na onoj sto go napravivme na predavanjata. 

//?Neka imame forma vo koja imame ime, prezime i telefonski broj  i neka na submit na taa forma, se proveruvaat slednive validacii 

//? imeto mora da bide najmalku 3 karakteri no najmnogu 20
//?prezimeto mora da bide najmalku 5 karakteri no najmnogu 20
//?telefonskiot broj, zadolzitelno e da bide brojki i da ima tocno 9 brojki

//?dokolku nekoi od ovie validacii ne e zadovoleno da se prikaze soodveten error  pod negovoto pole a dokolku site se zadovoleni 
//?da se napravi da ja snema formata i da se prikaze nekoj tekst vo h1 formata bese ispratena.

import React, { useState } from "react";

export const FormValidation = () => {
  const initialValues = { name: "", surname: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
    }
  };

  const showForm = () => {
        setIsSubmit(false);
        setFormValues("");
      };

  const validate = (values) => {
    const regex = /^\d{9}$/;
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required!";
    } else if (values.name.length < 3) {
      errors.name = "Name should be more than 3 characters long";
    } else if (values.name.length > 20) {
      errors.name = "Name should be less than 20 characters long";
    }

    if (!values.surname) {
      errors.surname = "Surname is required!";
    } else if (values.surname.length < 5) {
      errors.surname = "Surname should be more than 5 characters long";
    } else if (values.surname.length > 20) {
      errors.surname = "Surname should be less than 20 characters long";
    }

    if (!values.phone) {
      errors.phone = "Phone is required!";
    } else if (!regex.test(values.phone)) {
      errors.phone = "This is not a valid phone format";
    }
    return errors;
  };

  return (
    <div>
      {!isSubmit ? (
        <form>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChange}
          />
          <br />
          <p>{formErrors?.name}</p>
          <input
            name="surname"
            type="text"
            placeholder="Surname"
            value={formValues.surname}
            onChange={handleChange}
          />
          <br />
          <p>{formErrors?.surname}</p>
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            value={formValues.phone}
            onChange={handleChange}
          />
          <br />
          <p>{formErrors?.phone}</p>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h1>Form submitted successfully!</h1>
          <button type="button"
          onClick={showForm}>Show Form</button>
        </div>
      )}
    </div>
  );
};

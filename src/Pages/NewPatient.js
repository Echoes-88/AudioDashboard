import React, {useState, useEffect} from 'react';

import useAppContext from '../context/useAppContext';
import { Formik, resetForm } from 'formik';
import * as Yup from 'yup';
import Error from './Error';

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
  .required("Veuillez indiquer le nom du patient"),
  lastname: Yup.string()
  .required("Veuillez indiquer le prénom du patient"),
  age: Yup.number()
  .required("Veuillez indiquer l'age du patient"),
  birthday: Yup.string()
  .required("Veuillez indiquer la date de naissance du patient"),
})

function MyPatients(){

  const { addPatient, users, updated } = useAppContext();

  return(
    <>
    <h1>Ajouter un patient</h1>
    <Formik
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          addPatient(values);
        }}>

        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>

            <div className="input-row">
              <label htmlFor="firstname">Nom</label>
              <input
                type="firstname"
                name="firstname"
                id="firstname"
                placeholder="firstname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
                />
                <Error touched={touched.firstname} message={errors.firstname} /> 
            </div>

            <div className="input-row">
              <label htmlFor="lastname">Prenom</label>
              <input
                type="lastname"
                name="lastname"
                id="lastname"
                placeholder="lastname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
                />
                <Error touched={touched.lastname} message={errors.lastname} /> 
            </div>

            <div className="input-row">
              <label htmlFor="age">Age</label>
              <input
                type="age"
                name="age"
                id="age"
                placeholder="33"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                />
                <Error touched={touched.age} message={errors.age} />
            </div>

            <div className="input-row">
              <label htmlFor="birthday">Date de naissance</label>
              <input
                type="birthday"
                name="birthday"
                id="birthday"
                placeholder="03/11/1988"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.birthday}
                />
                <Error touched={touched.birthday} message={errors.birthday} />                
            </div>

            <div className="input-row">
              <button type="submit" disabled={isSubmitting}>
                Ajouter le patient
              </button>
            </div>

          </form>
        )}
        </Formik>
        {updated && (
          <>
          <p>L'utilisateur a bien été ajouté</p>
          </>
        )}
    </>
  )
}

export default MyPatients;
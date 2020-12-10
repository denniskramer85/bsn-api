import { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./styles.css";
import * as Yup from "yup";
import NatPersoonAPIcheck from "./natPersoonAPIcheck";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        bsn: "",
        voornaam: "",
        tussenvoegsel: "",
        achternaam: "",
        geslacht: "",
        geboortedatum: "",
    });

    return (
        <Formik
            enableReinitialize={true}
            initialValues={formData}
            validationSchema={Yup.object({
                bsn: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .required("Required"),
                voornaam: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
                achternaam: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <label htmlFor="firstName">BSN</label>
                <Field name="bsn" type="text" placeholder="type your bsn" />
                <ErrorMessage name="bsn" />
                <label htmlFor="voornaam">Voornaam</label>
                <Field name="voornaam" type="text" />
                <ErrorMessage name="voornaam" />
                <label htmlFor="tussenvoegsel">tussenvoegsel</label>
                <Field name="tussenvoegsel" type="text" />
                <ErrorMessage name="tussenvoegsel" />
                <label htmlFor="achternaam">Achternaam</label>
                <Field name="achternaam" type="text" />
                <ErrorMessage name="achternaam" />
                <label htmlFor="geslacht">Geslacht</label>
                <Field name="geslacht" as="select">
                    <option value="man">Man</option>
                    <option value="green">Vrouw</option>
                    <ErrorMessage name="geslacht" />
                </Field>
                <label htmlFor="geboortedatum">Geboortedatum</label>
                <Field name="geboortedatum" type="date" />
                <ErrorMessage name="geboortedatum" />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    );
};

function App() {
    return (
        <div>
            <NatPersoonAPIcheck />
            <SignupForm />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

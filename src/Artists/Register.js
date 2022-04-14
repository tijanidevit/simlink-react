import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useState } from "react";

const ArtistRegister = () => {
  const initialValues = {
    fullname: "",
    email: "",
    stage_name: "",
    password: "",
  };

  const [message, setMessage] = useState("");

  const headers = {
    Accept: "application/json",
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Custom error message"),
    email: Yup.string().required("Custom error message"),
    stage_name: Yup.string().required(),
    password: Yup.string().min(8).required(),
  });
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/api/register/", data, headers)
      .then((res) => {
        setMessage(res.data.message);
        console.log(res);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };
  return (
    <>
      <div>Add New Project Here</div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        encpassword="multipart/form-data"
      >
        <Form>
          <div>{message.current == "" ? "" : `${message}`}</div>
          <div>
            <label>Fullname</label>
            <Field id="inputFullname" name="fullname" />
            <ErrorMessage name="fullname" component="span" />
          </div>

          <div>
            <label>Email</label>
            <Field id="inputEmail" name="email" />
            <ErrorMessage name="email" component="span" />
          </div>

          <div>
            <label>Password</label>
            <Field id="inputPassword" name="password" />
            <ErrorMessage name="password" component="span" />
          </div>

          <div>
            <label>StageName</label>
            <Field id="inputStageName" name="stage_name" />
            <ErrorMessage name="stage_name" component="span" />
          </div>

          <div style={{ marginTop: 100 }}>
            <button password="submit">Create</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ArtistRegister;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const AddProject = () => {
  const initialValues = {
    user_id: 1,
    title: "",
    image: "",
    description: "",
    type: "",
  };

  const token = "dwjdhjwdwdhjedejhdehjd";
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "Application/json",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Custom error message"),
    image: Yup.mixed().required("Project Image is required"),
    description: Yup.string().required(),
    type: Yup.string().required(),
  });
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/api/artists/projects/", data, headers)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <>
      <div>Add New Project Here</div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enctype="multipart/form-data"
      >
        <Form>
          <div>
            <label>Project Title</label>
            <Field id="inputTitle" name="title" />
            <ErrorMessage name="title" component="span" />
          </div>

          <div>
            <label>Project Image</label>
            <Field type="file" accept="image/*" id="inputImage" name="image" />
            <ErrorMessage name="image" component="span" />
          </div>

          <div>
            <label>Project Description</label>
            <Field as="textarea" id="inputTitle" name="description" />
            <ErrorMessage name="description" component="span" />
          </div>

          <div>
            <Field as="select" name="type">
              <option value="single">Single</option>
              <option value="album">Album</option>
            </Field>
            <ErrorMessage name="type" component="span" />
          </div>

          <div style={{ marginTop: 100 }}>
            <button type="submit">Create</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddProject;

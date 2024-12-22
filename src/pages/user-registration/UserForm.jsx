import React from "react";
import { FaUser } from "react-icons/fa"; // User icon from react-icons
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import styles from "./user.module.css";

const UserForm = ({ handleformSubmit }) => {
  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Initial Values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  };

  // Form Submission Handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form Data:", values);
    setSubmitting(false);
    handleformSubmit();
    resetForm();
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.iconContainer}>
          <FaUser size={50} color="#ff7e5f" />
        </div>
        <h3 className={styles.cardTitle}>User Creation Form</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form>
              {/* Name Field */}
              <div className={styles.fieldContainer}>
                <label htmlFor="name">Name</label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className={styles.formControl}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.textDanger}
                />
              </div>

              {/* Email Field */}
              <div className={styles.fieldContainer}>
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={styles.formControl}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.textDanger}
                />
              </div>

              {/* Password Field */}
              <div className={styles.fieldContainer}>
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className={styles.formControl}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.textDanger}
                />
              </div>

              {/* Is Admin Toggle */}
              <div className={styles.fieldContainer}>
                <label>Is Admin</label>
                <Field
                  type="checkbox"
                  name="isAdmin"
                  checked={values.isAdmin}
                  onChange={() => setFieldValue("isAdmin", !values.isAdmin)}
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.btnSubmit}
                >
                  {isSubmitting ? "Submitting..." : "Create User"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserForm;

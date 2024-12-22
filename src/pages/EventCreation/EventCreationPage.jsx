import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form as BootstrapForm, Button, Row, Col } from "react-bootstrap";
import { useCreateEventMutation } from "../../redux/api/EventApi";
import { toast } from "react-toastify";

const EventCreationForm = () => {

  // Validation schema
  const validationSchema = Yup.object({
    title: Yup.string().required("Event Name is required"),
    statDate: Yup.date().required("Start Date is required"),
    endDate: Yup.date().required("End Date is required"),
    location: Yup.string().required("Location is required"),
    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
    avenueId: Yup.number().required("Avenue ID is required"),
  });
  const [createEvent] = useCreateEventMutation();
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    // Creating the payload object
    const payload = {
      title: values.title,
      statDate: values.statDate,
      endDate: values.endDate,
      location: values.location,
      description: values.description,
      avenueId: values.avenueId,
    };

    await createEvent(payload).unwrap();
    toast.success("Event created successfully");
    resetForm();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "80%",
          height: "65vh",
          maxWidth: "1000px",
          marginTop: "50px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
        }}
      >
        {/* Left Side Gradient */}
        <div
          style={{
            width: "40%",
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            padding: "30px",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontSize: "1.8rem", fontWeight: "600" }}>
            Plan Your Event
          </h3>
          <p
            style={{ textAlign: "center", marginTop: "15px", fontSize: "1rem" }}
          >
            Fill out the necessary details to make your event a success. Let's
            make it amazing!
          </p>
        </div>

        {/* Form Section */}
        <div style={{ width: "60%", padding: "30px" }}>
          <h2 className="text-center mb-4">Event Registration</h2>
          <Formik
            initialValues={{
              title: "",
              statDate: "",
              endDate: "",
              location: "",
              description: "",
              avenueId: 1, // Default value for Avenue ID
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit} // Call handleSubmit here
          >
            {({ setFieldValue }) => (
              <Form>
                <Row className="mb-3">
                  <Col md={6}>
                    <BootstrapForm.Group>
                      <BootstrapForm.Label>Event Name</BootstrapForm.Label>
                      <Field
                        name="title"
                        className="form-control"
                        placeholder="Enter event name"
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group>
                      <BootstrapForm.Label>Location</BootstrapForm.Label>
                      <Field
                        name="location"
                        className="form-control"
                        placeholder="Enter event location"
                      />
                      <ErrorMessage
                        name="location"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <BootstrapForm.Group>
                      <BootstrapForm.Label>Start Date</BootstrapForm.Label>
                      <Field
                        type="date"
                        name="statDate"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="statDate"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group>
                      <BootstrapForm.Label>End Date</BootstrapForm.Label>
                      <Field
                        type="date"
                        name="endDate"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="endDate"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                </Row>

                {/* Avenue ID Field */}
                <Row className="mb-3">
                  <Col md={12}>
                    <BootstrapForm.Group>
                      <BootstrapForm.Label>Avenue ID</BootstrapForm.Label>
                      <Field
                        name="avenueId"
                        className="form-control"
                        placeholder="Enter Avenue ID"
                      />
                      <ErrorMessage
                        name="avenueId"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                </Row>

                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Description</BootstrapForm.Label>
                  <Field
                    as="textarea"
                    name="description"
                    className="form-control"
                    placeholder="Enter event description"
                    rows={3}
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <div className="text-center">
                  <Button type="submit" variant="primary">
                    Create Event
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EventCreationForm;

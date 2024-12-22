import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form as BootstrapForm, Button, Row, Col } from "react-bootstrap";

const EventCreationForm = () => {
  const [previewImage, setPreviewImage] = useState(null); // State to hold the preview image URL

  // Validation schema
  const validationSchema = Yup.object({
    eventName: Yup.string().required("Event Name is required"),
    eventDate: Yup.date().required("Date is required"),
    location: Yup.string().required("Location is required"),
    capacity: Yup.number().required("Capacity is required"),
    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
    image: Yup.mixed().required("Image is required"),
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "80%",
          height: "85vh",
          maxWidth: "1000px",
          marginTop: "50px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
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
              eventName: "",
              eventDate: "",
              location: "",
              capacity: "",
              description: "",
              image: null,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Form Data:", values);
              alert("Event Created Successfully!");
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <Row className="mb-3">
                  <Col md={6}>
                    <BootstrapForm.Group>
                      <BootstrapForm.Label>Event Name</BootstrapForm.Label>
                      <Field
                        name="eventName"
                        className="form-control"
                        placeholder="Enter event name"
                      />
                      <ErrorMessage
                        name="eventName"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group>
                      <BootstrapForm.Label>Event Date</BootstrapForm.Label>
                      <Field
                        type="date"
                        name="eventDate"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="eventDate"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
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
                  <Col md={6}>
                    <BootstrapForm.Group>
                      <BootstrapForm.Label>Capacity</BootstrapForm.Label>
                      <Field
                        name="capacity"
                        className="form-control"
                        placeholder="Enter event capacity"
                      />
                      <ErrorMessage
                        name="capacity"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={12}>
                    <BootstrapForm.Group>
                      <BootstrapForm.Label>Event Image</BootstrapForm.Label>
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                        onChange={(event) => {
                          const file = event.currentTarget.files[0];
                          setFieldValue("image", file);
                          setPreviewImage(
                            file ? URL.createObjectURL(file) : null
                          );
                        }}
                      />
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                </Row>

                {previewImage ? (
                  <div
                    style={{
                      position: "relative",
                      width: "120px",
                      height: "120px", // Maintain fixed ratio
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: "15px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setPreviewImage(null)}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        background: "#ff0000",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: "25px",
                        height: "25px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      &times;
                    </button>
                    <img
                      src={previewImage}
                      alt="Preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      position: "relative",
                      width: "120px",
                      height: "120px", // Maintain fixed ratio
                        
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: "15px",
                    }}
                  ></div>
                )}

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

import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const EventCard = ({ event }) => {
  return (
    <Card className="mb-4 shadow-sm" style={{ height: "350px" }}>
      <Card.Body className="d-flex flex-column">
        <Card.Title
          className="text-center mb-3"
          style={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          {event.title}
        </Card.Title>
        <Card.Text className="mb-2">
          <FaCalendarAlt className="me-2 text-primary" />
          <strong>Date:</strong> {new Date(event.statDate).toLocaleDateString()}{" "}
          - {new Date(event.endDate).toLocaleTimeString()}
        </Card.Text>
        <Card.Text className="mb-2">
          <FaMapMarkerAlt className="me-2 text-danger" />
          <strong>Location:</strong> {event.location}
        </Card.Text>
        <Card.Text
          className="flex-grow-1"
          style={{ fontSize: "0.9rem", color: "#555" }}
        >
          {event.description}
        </Card.Text>
        <Button variant="success" className="mt-auto" href="#">
          Book Now
        </Button>
      </Card.Body>
      <Card.Footer className="text-center">
        <small className="text-muted">
          Venue: {event.Avenue.name} - {event.Avenue.address}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default EventCard;

// Usage Example:
// <EventCard event={eventData} />

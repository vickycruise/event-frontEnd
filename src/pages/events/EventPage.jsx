import React, { useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import { Row, Col, Container } from "react-bootstrap";
const EventPage = () => {
  // Mock data for the event cards
  const eventData = Array.from({ length: 100 }, (_, index) => ({
    image: `https://via.placeholder.com/150?text=Event+${index + 1}`,
    name: `Event ${index + 1}`,
    description: `Description for event ${
      index + 1
    }. This is a brief description.`,
    price: `$${(index + 1) * 10}`,
    bookLink: `https://www.example.com/book/event${index + 1}`,
  }));

  // State for the current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Calculate the index of the first and last items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the eventData array to get only the items for the current page
  const currentItems = eventData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(eventData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="mt-5">
      <Row>
        {currentItems.map((event, index) => (
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={index}>
            <EventCard event={event} />
          </Col>
        ))}
      </Row>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default EventPage;

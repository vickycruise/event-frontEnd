import React from "react";
import { FaThumbsUp, FaCommentAlt, FaShareAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Events.css";

const EventCard = ({ event }) => {
  const {
    userImage = "https://via.placeholder.com/40?text=User",
    username = "Anonymous",
    status = "going",
    eventDate = new Date().toISOString(),
    image = "https://via.placeholder.com/300x200?text=Event",
    title = "Untitled Event",
    category = "General",
    goingCount = [],
    likes = 0,
    comments = 0,
  } = event;

  return (
    <div
      className="card shadow-sm border-0"
      style={{ borderRadius: "15px", maxWidth: "350px" }}
    >
      {/* Event Image */}
      <div className="position-relative">
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            height: "200px",
            objectFit: "cover",
          }}
        />
        {/* Date Container - Positioned at Bottom Right */}
        <div
          id="date-con"
          className="position-absolute bg-white p-2 rounded text-center shadow"
        >
          <h6 className="mb-0">{new Date(eventDate).getDate()}</h6>
          <small className="text-muted">
            {new Date(eventDate).toLocaleString("default", { month: "short" })}
          </small>
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="text-muted mb-2">{category}</p>
        <div className="d-flex align-items-center">
          <div className="d-flex">
            {Array.isArray(goingCount) &&
              goingCount.slice(0, 3).map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Attendee ${index + 1}`}
                  className="rounded-circle"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginLeft: index > 0 ? "-10px" : "0",
                    border: "2px solid white",
                  }}
                />
              ))}
          </div>
          <small className="ms-2 text-muted">+{goingCount.length} going</small>
        </div>
        <div className="card-header bg-white border-0 d-flex align-items-center mt-3">
          <img
            src={userImage}
            alt={username}
            className="rounded-circle"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <div className="ms-2">
            <h6 className="mb-0">{username}</h6>
            <small className="text-muted">
              {new Date(eventDate).toLocaleString("default", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer bg-white border-0 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <FaThumbsUp className="text-primary me-2" />
          <small>{likes}</small>
        </div>
        <div className="d-flex align-items-center">
          <FaCommentAlt className="text-secondary me-2" />
          <small>{comments}</small>
        </div>
        <FaShareAlt className="text-success" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default EventCard;

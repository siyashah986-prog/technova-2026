import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import EventCards from "./components/EventCards";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");

  const [registrations, setRegistrations] = useState([]);

  // Fetch data from Express backend using Axios
  useEffect(function () {
    axios
      .get("http://localhost:3000/api/registrations")
      .then(function (response) {
        setRegistrations(response.data);
      })
      .catch(function (error) {
        console.log("Error fetching data:", error);
      });
  }, []);

  function register() {
    setShowMessage(true);
  }

  function submitForm(event) {
    event.preventDefault();
    setShowMessage(true);
  }

  return (
    <>
      <Navbar />

      {/* Home Section */}
      <div id="home" className="container text-center mt-5">

        <h1 className="display-4 fw-bold">
          Welcome to TechNova 2026
        </h1>

        <p className="lead mt-3">
          Innovate. Create. Connect.
        </p>

        <p className="text-muted">
          A technology event created by <strong>Siya Shah</strong>
        </p>

        <button
          className="btn btn-primary mt-3"
          onClick={register}
        >
          Register Now
        </button>

        {showMessage && (
          <div className="alert alert-success mt-3">
            Registration is open! Please fill the form below.
          </div>
        )}

        <div className="row mt-5">

          <div className="col-md-4">
            <div className="card p-3">
              <h3>📅 Date</h3>
              <p>15 September 2026</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h3>📍 Venue</h3>
              <p>TechNova Auditorium</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h3>⏰ Time</h3>
              <p>10:00 AM onwards</p>
            </div>
          </div>

        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container text-center mt-5">

        <h2 className="fw-bold">
          About TechNova 2026
        </h2>

        <p className="mt-3">
          TechNova 2026 is a technology event where students,
          developers and technology enthusiasts come together
          to explore new ideas, learn new skills and build
          innovative projects.
        </p>

        <p>
          Join us for an exciting experience filled with
          technology, creativity, workshops and networking.
        </p>

      </div>

      {/* Events Component */}
      <EventCards />

      {/* Speakers Section */}
      <div className="container text-center mt-5">

        <h2 className="fw-bold">
          Our Speakers
        </h2>

        <p className="text-muted mt-2">
          Meet the technology experts joining TechNova 2026
        </p>

        <div className="row mt-4">

          <div className="col-md-4">
            <div className="card p-4 h-100">

              <div className="display-4">
                👨‍💻
              </div>

              <h4 className="mt-3">
                Rahul Mehta
              </h4>

              <p className="text-muted">
                Software Engineer
              </p>

              <p>
                Expert in software development and modern
                web technologies.
              </p>

            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100">

              <div className="display-4">
                👩‍💻
              </div>

              <h4 className="mt-3">
                Ananya Sharma
              </h4>

              <p className="text-muted">
                AI Specialist
              </p>

              <p>
                Passionate about Artificial Intelligence,
                Machine Learning and innovation.
              </p>

            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100">

              <div className="display-4">
                👨‍🚀
              </div>

              <h4 className="mt-3">
                Arjun Kapoor
              </h4>

              <p className="text-muted">
                Technology Consultant
              </p>

              <p>
                Helps organizations use technology to solve
                real-world problems.
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Schedule Section */}
      <div className="container text-center mt-5">

        <h2 className="fw-bold">
          Event Schedule
        </h2>

        <p className="text-muted mt-2">
          Plan your day at TechNova 2026
        </p>

        <div className="row mt-4">

          <div className="col-md-4">
            <div className="card p-4 h-100">

              <h4>10:00 AM</h4>

              <h5 className="mt-3">
                Opening Ceremony
              </h5>

              <p>
                Welcome address and introduction to
                TechNova 2026.
              </p>

            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100">

              <h4>12:00 PM</h4>

              <h5 className="mt-3">
                AI Workshop
              </h5>

              <p>
                An interactive session covering
                Artificial Intelligence and Machine Learning.
              </p>

            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100">

              <h4>3:00 PM</h4>

              <h5 className="mt-3">
                Hackathon
              </h5>

              <p>
                Participants build creative solutions
                and present their ideas.
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Registration Section */}
      <div
        id="register"
        className="container text-center mt-5 mb-5"
      >

        <h2 className="fw-bold">
          Register for TechNova 2026
        </h2>

        <form
          onSubmit={submitForm}
          className="mt-4 mx-auto"
          style={{ maxWidth: "500px" }}
        >

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your name"
            value={name}
            onChange={function (event) {
              setName(event.target.value);
            }}
            required
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter your email"
            value={email}
            onChange={function (event) {
              setEmail(event.target.value);
            }}
            required
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your college"
            value={college}
            onChange={function (event) {
              setCollege(event.target.value);
            }}
            required
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit Registration
          </button>

        </form>

        {showMessage && (
          <div
            className="alert alert-success mt-4 mx-auto"
            style={{ maxWidth: "500px" }}
          >

            <h5>
              Registration Successful! 🎉
            </h5>

            <p className="mb-0">
              Thank you, {name}, for registering for TechNova 2026.
            </p>

          </div>
        )}

      </div>

      {/* Dynamic Backend Data Section */}
      <div className="container mt-5 mb-5">

        <h2 className="fw-bold text-center">
          Registered Participants
        </h2>

        <p className="text-muted text-center">
          Data fetched dynamically from Express backend using Axios
        </p>

        {registrations.length === 0 ? (

          <div className="alert alert-info text-center mt-4">
            No registrations available.
          </div>

        ) : (

          <div className="row mt-4">

            {registrations.map(function (registration) {

              return (
                <div
                  className="col-md-6 mb-4"
                  key={registration.id}
                >

                  <div className="card p-4 h-100">

                    <h4>
                      {registration.name}
                    </h4>

                    <p className="mb-1">
                      <strong>Email:</strong>{" "}
                      {registration.email}
                    </p>

                    <p className="mb-1">
                      <strong>College:</strong>{" "}
                      {registration.college}
                    </p>

                    <p className="mb-1">
                      <strong>Department:</strong>{" "}
                      {registration.department}
                    </p>

                    <p className="mb-1">
                      <strong>Event:</strong>{" "}
                      {registration.event}
                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        )}

      </div>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-4">

        <h5 className="fw-bold">
          TechNova 2026
        </h5>

        <p className="mb-1">
          Innovate. Create. Connect.
        </p>

        <p className="mb-0">
          Designed & Developed by <strong>Siya Shah</strong>
        </p>

        <small>
          © 2026 TechNova. All Rights Reserved.
        </small>

      </footer>

    </>
  );
}

export default App;
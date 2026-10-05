import { useState } from "react";

function EventCards() {
  const [selectedEvent, setSelectedEvent] = useState("");

  function showDetails(eventName) {
    setSelectedEvent(eventName);
  }

  return (
    <section id="events" className="container py-5">

      <h2 className="text-center mb-4">
        Event Highlights
      </h2>

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">

              <h4>Coding Contest</h4>

              <p>
                Compete with the best programmers.
              </p>

              <button
                className="btn btn-outline-primary"
                onClick={() => showDetails("Coding Contest")}
              >
                Learn More
              </button>

            </div>
          </div>
        </div>


        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">

              <h4>Hackathon</h4>

              <p>
                Build innovative projects in 24 hours.
              </p>

              <button
                className="btn btn-outline-primary"
                onClick={() => showDetails("Hackathon")}
              >
                Learn More
              </button>

            </div>
          </div>
        </div>


        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">

              <h4>Web Design</h4>

              <p>
                Create responsive and creative websites.
              </p>

              <button
                className="btn btn-outline-primary"
                onClick={() => showDetails("Web Design")}
              >
                Learn More
              </button>

            </div>
          </div>
        </div>

      </div>


      {selectedEvent && (
        <div className="alert alert-info text-center mt-3">
          You selected <strong>{selectedEvent}</strong>.
          More details about this event will be available soon!
        </div>
      )}

    </section>
  );
}

export default EventCards;
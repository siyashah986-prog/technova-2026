function Register() {
  return (
    <div className="mt-4">
      <h2>Event Registration</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Select Event</label>
          <select className="form-select">
            <option>Hackathon</option>
            <option>Web Development Workshop</option>
            <option>AI & Machine Learning Seminar</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
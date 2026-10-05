function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">

        <a className="navbar-brand fw-bold" href="#home">
          TechNova 2026
        </a>

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#events">
              Events
            </a>
          </li>

          <li className="nav-item">
            <a className="btn btn-light ms-2" href="#register">
              Register
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
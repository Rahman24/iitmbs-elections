import { NavLink } from "react-router-dom";

import logo from "assets/images/logo.png";

import "./Nav.css";

const LINKS = [
  {
    to: "/candidates",
    label: "Candidates",
  },
  {
    to: "/vote",
    label: "Vote"
  },
  {
    to: "/profile",
    label: "Info",
  }
];

const NavigationDefault = () => {
  return (
    <div className="bg-color-maroon px-lg-5 pb-lg-4">
      <nav className="navbar navbar-dark navbar-expand-lg py-0 mx-lg-5">
        <div className="container-fluid bg-color-gold mx-lg-5 navbar-rounded">
          <img src={logo} className="navbar-brand-img mt-lg-5 m-2 mx-lg-5" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav navbar-dark py-2 pb-5 pb-lg-2 px-5">
              <li className="nav-item mx-3">
                <NavLink
                  to={"/"}
                  exact
                  activeClassName="active"
                  className="nav-link text-uppercase text-white fw-bold"
                  id={"Home"}
                >
                  Home
                </NavLink>
              </li>
              {LINKS.map(({ to, label }) => {
                return (
                  <li className="nav-item mx-3" key={to}>
                    <NavLink
                      to={to}
                      activeClassName="active"
                      className="nav-link text-uppercase text-white fw-bold"
                      id={label}
                    >
                      {label}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div className="mx-lg-5 px-lg-5">
        <div className="mx-lg-5 px-lg-5 d-flex justify-content-center d-lg-block">
          <div className="navbar-brand bg-color-primary mx-5 mx-lg-3 p-0 px-5 navbar-rounded">
            IIT Madras BS Students
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationDefault;
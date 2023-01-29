import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="section">
      <section className="section-center">
        <nav className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Home
          </NavLink>
          <NavLink
            to="/download"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Download
          </NavLink>
          <NavLink
            to="/calculator"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Calculators
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            About
          </NavLink>

        </nav>
        <div className="horizontal-line"></div>
      </section>
    </section>
  );
};
export default Navbar;

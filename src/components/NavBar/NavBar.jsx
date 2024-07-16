import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
};

const linkStyle = {
  margin: "0 10px",
  color: "#fff",
  textDecoration: "none",
  fontSize: "16px",
  transition: "color 0.3s"
};

const linkHoverStyle = {
  color: "#f90"
};

const sectionStyle = {
  display: "flex",
  alignItems: "center"
};

function NavBar() {
  return (
    <nav style={navStyle}>
      <h1>Inicio</h1>
      <section style={sectionStyle}>
        <Link to="/category/Remeras" style={linkStyle} onMouseEnter={e => e.target.style.color = linkHoverStyle.color} onMouseLeave={e => e.target.style.color = linkStyle.color}>
          Remeras
        </Link>
        <Link to="/category/zapatillas" style={linkStyle} onMouseEnter={e => e.target.style.color = linkHoverStyle.color} onMouseLeave={e => e.target.style.color = linkStyle.color}>
          Zapatillas
        </Link>
        <Link to="/category/accesorios" style={linkStyle} onMouseEnter={e => e.target.style.color = linkHoverStyle.color} onMouseLeave={e => e.target.style.color = linkStyle.color}>
          Accesorios
        </Link>
      </section>
      <CartWidget />
    </nav>
  );
}

export default NavBar;

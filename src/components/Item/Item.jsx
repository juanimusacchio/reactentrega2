import { Link } from "react-router-dom";

const articleStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "1rem",
  margin: "1rem",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  backgroundColor: "#fff"
};

const imgStyle = {
  width: "150px",
  height: "150px",
  objectFit: "cover",
  borderRadius: "8px"
};

const nameStyle = {
  fontSize: "1.5rem",
  margin: "0.5rem 0"
};

const categoryStyle = {
  color: "#888",
  fontSize: "1rem",
  margin: "0.5rem 0"
};

const priceStyle = {
  fontSize: "1.25rem",
  color: "#333",
  margin: "0.5rem 0"
};

const linkStyle = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  margin: "1rem 0",
  color: "#fff",
  backgroundColor: "#007bff",
  borderRadius: "4px",
  textDecoration: "none",
  transition: "background-color 0.3s"
};

const linkHoverStyle = {
  backgroundColor: "#0056b3"
};

const Item = ({ id, name, img, category, price }) => {
  return (
    <article style={articleStyle}>
      <h1 style={nameStyle}>{name}</h1>
      <img src={img} style={imgStyle} alt={name} />
      <p style={categoryStyle}>Category: {category}</p>
      <h2 style={priceStyle}>${price}</h2>
      <Link
        to={`/detail/${id}`}
        style={linkStyle}
        onMouseEnter={e => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)}
        onMouseLeave={e => (e.target.style.backgroundColor = linkStyle.backgroundColor)}
      >
        Ver Detalle
      </Link>
      <hr />
    </article>
  );
};

export default Item;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CategoryItem.css";

function CategoryItem({ name, img, color }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const routeName = name.toLowerCase(); // Create a route name based on the category name
    navigate(`/categories/${routeName}`);
  };

  return (
    <div
      className="category-card"
      style={{ "--category-color": color }}
      onClick={handleCardClick}
    >
      <img className="category-image" src={img} alt={name} />
      <div className="category-name">{name}</div>
    </div>
  );
}

export default CategoryItem;

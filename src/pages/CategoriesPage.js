import React, { useState } from "react";
import styled from "styled-components";
import { Category } from "../components/categories.js";
import CategoryItem from "../components/CategoryItem.js";
import "../styles/CategoriesPage.css";

function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = Category.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="categories-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="categories-grid">
        {filteredCategories.map((category, index) => (
          <CategoryItem
            key={index}
            name={category.name}
            img={category.img}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;

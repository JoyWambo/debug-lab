import React, { useState } from "react";
import handbagImage from "../assets/images/luxury-handbag.jpg";

const ProductCard = () => {
  // Correct state (boolean)
  const [added, setAdded] = useState(false);

  // Correct price
  const [price] = useState(120);

  // Added a clean product description
  const description =
    "A premium leather handbag designed for style and durability. Perfect for daily use, with elegant stitching and a modern, minimalist finish.";

  return (
    <div className="product-card">
      <h2 className="product-title">Luxury Handbag</h2>

      {/* Image wrapper */}
      <div className="image-wrapper">
        <img src={handbagImage} alt="Handbag" className="product-img" />
      </div>

      {/* Description with improved readability */}
      <p className="description">{description}</p>

      <p className="price">
        <strong>Price:</strong> ${price}
      </p>

      <button
        className={added ? "btn-added" : ""}
        onClick={() => setAdded(!added)}
      >
        {added ? "Added to Cart ✅" : "Add to Cart 🛒"}
      </button>
    </div>
  );
};

export default ProductCard;

import React from "react";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  const shortenTitle = (input, split = 80) =>
    input.length > split ? `${input.substring(0, split)}...` : input;

  return (
    <div className="product">
      <div className="product__info">
        <p>{shortenTitle(title)}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>{"⭐️".repeat(rating)}</p>
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket} className={"btn-orange"}>
        Add to basket
      </button>
    </div>
  );
};

export default Product;

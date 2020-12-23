import React from "react";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__price">{"⭐️".repeat(rating)}</div>
        {!hideButton && (
          <button onClick={removeFromBasket} className={"btn-orange"}>
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;

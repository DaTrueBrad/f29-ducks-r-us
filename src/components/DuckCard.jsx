import React, { useContext } from "react";
import { GlobalContext } from "../store/globalContext";

const DuckCard = (props) => {
  const { state, dispatch } = useContext(GlobalContext);

  const addToCart = () => {
    dispatch({ type: "ADDTOCART", payload: props.duck });
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVEFROMCART", payload: props.duck });
  };

  return (
    <div className="card">
      <img src={props.duck.image} alt="" className="card-image" />
      <h3>{props.duck.name}</h3>
      <div className="row-container">
        <h4>Luck: {props.duck.luck}/10</h4>
        <h4>Price: ${props.duck.price}</h4>
      </div>
      <h4 className="popular">{props.duck.popular && "Popular!!!"}</h4>
      <button onClick={props.cart ? removeFromCart : addToCart}>
        {props.cart ? "Remove" : "Add to Cart"}
      </button>
    </div>
  );
};

export default DuckCard;

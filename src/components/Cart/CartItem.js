import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { increment, removeFromCart } from "../../redux-store/CartRreducer";
const CartItem = (props) => {
  const { title, quantity, price, id } = props.cartItem;
  const total = quantity * price;
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(increment({ id: id }));
  };
  const decrement = () => {
    dispatch(removeFromCart({ cartItem: props.cartItem }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrement}>-</button>
          <button onClick={incrementItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

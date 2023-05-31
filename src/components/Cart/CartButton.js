import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../../redux-store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const noOfCartItems = cartProducts.length;
  const onClickHandler = () => {
    dispatch(showCart());
  };
  return (
    <button onClick={onClickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default CartButton;

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const show = useSelector((state) => state.cart.show);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  return (
    <>
      {show && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartProducts.map((item) => (
              <CartItem
                cartItem={{
                  title: item.title,
                  quantity: item.quantity,
                  price: item.price,
                  id: item.id,
                }}
                key={item.id}
              />
            ))}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;

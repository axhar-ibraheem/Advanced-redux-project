import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendCartData, getData } from "./redux-store/CartRreducer";
import Notification from "./components/UI/Notification";

let firstRender = true;
function App() {
  const cart = useSelector((state) => state.cart);
  const changed = useSelector((state) => state.cart.changed);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    if (changed) {
      dispatch(sendCartData(cart.cartProducts));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;

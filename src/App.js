import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { showNotification } from "./redux-store/ui-slice";
import Notification from "./components/UI/Notification";
function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const changed = useSelector((state) => state.cart.changed);
  useEffect(() => {
    const sendCartData = async () => {
      try {
        dispatch(
          showNotification({
            status: "pending,",
            title: "sending...",
            message: "sending cart data",
          })
        );

        const response = await axios.put(
          "https://react-http-4a6c0-default-rtdb.firebaseio.com/cart.json",
          cart
        );
        if (response.status === 200) {
          dispatch(
            showNotification({
              status: "success",
              title: "Success!",
              message: "sent cart data successfully",
            })
          );
        }
      } catch (error) {
        dispatch(
          showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed",
          })
        );
      }
    };
    if (changed) {
      sendCartData();
    }
  }, [cart, dispatch]);

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

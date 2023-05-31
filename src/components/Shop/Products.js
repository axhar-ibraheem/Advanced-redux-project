import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyProducts = [
  {
    id: 1,
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet",
    price: 10.99,
    quantity: 1,
  },
  {
    id: 2,
    title: "Product 2",
    description: "Consectetur adipiscing elit",
    price: 19.99,
    quantity: 1,
  },
  {
    id: 3,
    title: "Product 3",
    description: "Sed do eiusmod tempor incididunt",
    price: 14.99,
    quantity: 1,
  },
  {
    id: 4,
    title: "Product 4",
    description: "Ut labore et dolore magna aliqua",
    price: 24.99,
    quantity: 1,
  },
  {
    id: 5,
    title: "Product 5",
    description: "Excepteur sint occaecat cupidatat non proident",
    price: 9.99,
    quantity: 1,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.description}
            key={item.id}
            id={item.id}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

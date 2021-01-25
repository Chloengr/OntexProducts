import * as React from "react";
import { products } from "../data/product";
import ItemsList from "../components/ItemsList";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "Avenir,-apple-system,Segoe UI,Noto Sans,sans-serif",
};

const IndexPage = () => {
  const [productList, setproductList] = React.useState(products);

  function handleRemove(sku) {
    const newList = productList.filter((product) => product.sku !== sku);
    setproductList(newList);
  }
  return (
    <main style={pageStyles}>
      <h1>Ontex Products : </h1>
      <ItemsList products={productList} onDelete={handleRemove} />
    </main>
  );
};

export default IndexPage;

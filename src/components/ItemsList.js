import React, { useMemo } from "react";
import styled from "styled-components";
import Item from "./Item";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const Total = styled.p`
  color: #1890ff;
`;

function getTotalProductPrice(products) {
  let total = 0;
  for (const product in products) {
    total += products[product].prix.value;
  }
  return total;
}

const ItemsList = ({ products, onDelete }) => {
  const total = useMemo(() => getTotalProductPrice(products), [products]);

  return (
    <Wrapper>
      <Content>
        {products.map((product) => (
          <Item key={product.id} product={product} onDelete={onDelete} />
        ))}
      </Content>
      <Total>
        Total : <strong>{total} EUR</strong>
      </Total>
    </Wrapper>
  );
};

export default ItemsList;

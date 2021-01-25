import * as React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 355px;
  border-radius: 45px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(210, 210, 210, 0.38);
  padding: 40px 0;
  margin: 0 30px 20px 30px;
`;

const DeleteButton = styled.button`
  height: 50px;
  width: 158px;
  border-radius: 42.5px;
  border: 1px solid #1890ff;
  color: #1890ff;
  background-color: #fff;
`;

const Item = ({ product, onDelete }) => {
  return (
    <Card>
      <img src={product.image} alt="product" />
      <h3>{product.name}</h3>
      <p>{product.sku}</p>
      <span>{product.description}</span>
      <p>
        {product.prix.value} {product.prix.currency}
      </p>
      <DeleteButton type="button" onClick={() => onDelete(product.sku)}>
        Supprimer
      </DeleteButton>
    </Card>
  );
};
export default Item;

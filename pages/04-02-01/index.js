import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function CreateProductPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });
    console.log(result);
  };

  return (
    <div>
      판매자: <input type="text" onChange={onChangeSeller} />
      <div>
        상품명: <input type="text" onChange={onChangeName} />
        상품설명: <input type="text" onChange={onChangeDetail} />
        가격: <input type="text" onChange={onChangePrice} />
      </div>
      <button onClick={onClickSubmit}>입력</button>
    </div>
  );
}

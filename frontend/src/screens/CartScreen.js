import React, { useEffect } from "react";
import {
  Link,
  useSearchParams,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart } from "../actions/cartActions";
import { disable } from "colors";

const CartScreen = () => {
  const { productID } = useParams();
  console.log(productID);
  const [qtyString] = useSearchParams();
  const qty = Number(qtyString.toString().split("=")[1]);
  console.log(qtyString);

  const dispatch = useDispatch();
  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [dispatch, productID, qty]);
  return <div>CartScreen</div>;
};

export default CartScreen;

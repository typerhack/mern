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
  const { id } = useParams();
  const [qtyString] = useSearchParams();
  const qty = Number(qtyString.toString().split("=")[1]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);
  return <div>CartScreen</div>;
};

export default CartScreen;

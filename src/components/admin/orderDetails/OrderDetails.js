import React, { useEffect, useState } from "react";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import styles from "./OrderDetails.module.scss";
import spinnerImg from "../../../assets/spinner.jpg";
import { Link, useParams } from "react-router-dom";
import ChangeOrderStatus from "../changeOrderStatus/ChangeOrderStatus";

const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const { document } = useFetchDocument("orders", id);

  useEffect(() => {
    setOrder(document);
  }, [document]);

  function translateOrderStatus(orderStatus) {
    if (orderStatus === "Order Placed...") {
      return "Pedido Realizado";
    } else if (orderStatus === "Processing...") {
      return "Procesando...";
    } else if (orderStatus === "Shipped...") {
      return "Enviado";
    } else {
      return "Entregado";
    }
  }

  return (
    <>
      {console.log(order)}
      <div className={styles.table}>
        <div>
          <Link to="/admin/orders">&larr; Volver a los pedidos</Link>
        </div>
        <br />
        {order === null ? (
          <img src={spinnerImg} alt="Cargando..." style={{ width: "50px" }} />
        ) : (
          <>
            <p>
              <b>ID: </b> {order.id}
            </p>
            <p>
              <b>Precio: </b> {order.orderAmount}€
            </p>
            <p>
              <b>Estado: </b> {translateOrderStatus(order.orderStatus)}
            </p>
            <p>
              <b>Dirección de envío</b>
              <br />
              Dirección: {order.shippingAddress.line1},
              {order.shippingAddress.line2}, {order.shippingAddress.city}
              <br />
              Estado: {order.shippingAddress.state}
              <br />
              País: {order.shippingAddress.country}
            </p>
            <br />
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.cartItems.map((cart, index) => {
                  const { id, name, price, imageURL, cartQuantity } = cart;
                  return (
                    <tr key={id}>
                      <td>
                        <b>{index + 1}</b>
                      </td>
                      <td>
                        <img
                          src={imageURL}
                          alt={name}
                          style={{ width: "100px" }}
                        />
                                                <p>
                          <b>{name}</b>
                        </p>
                      </td>
                      <td>{price}€</td>
                      <td>{cartQuantity}</td>
                      <td>{(price * cartQuantity).toFixed(2)}€</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <ChangeOrderStatus order={order} id={id}/>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OrderDetails;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetchCollection from "../../../customHooks/useFetchCollection";

import {
  selectOrderHistory,
  STORE_ORDERS,
} from "../../../redux/slice/orderSlice";
import Loader from "../../loader/Loader";
import styles from "./Orders.module.scss";

const Orders = () => {
  const { data, isLoading } = useFetchCollection("orders");
  const orders = useSelector(selectOrderHistory);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(STORE_ORDERS(data));
  }, [dispatch, data]);

  const handleClick = (id) => {
    navigate(`/admin/order-details/${id}`);
  };

  function translateOrderStatus(orderStatus) {
    if (orderStatus === "Order Placed...") {
      return "Pedido Realizado";
    } else if (orderStatus === "Processing...") {
      return "Procesando..."
    } else if (orderStatus === "Shipped...") {
      return "Enviado"
    } else {
      return "Entregado"
    }
  }

  function changeDateFormat(orderDate) {
    const months = {
      January: '01',
      February: '02',
      March: '03',
      April: '04',
      May: '05',
      June: '06',
      July: '07',
      August: '08',
      September: '09',
      October: '10',
      November: '11',
      December: '12'
    };
  
    const parts = orderDate.split(' ');
    const day = parts[2];
    const month = months[parts[1]];
    const year = parts[3];
  
    return `${day}/${month}/${year}`;
  }

  return (
    <>
      <div className={styles.order}>
        <p>
          Abre un pedido para <b>cambiarle el estado</b>
        </p>
        <br />
        <>
          {isLoading && <Loader />}
          <div className={styles.table}>
            {orders.length === 0 ? (
              <p>No se han encontrado pedidos</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>s/n</th>
                    <th>Fecha</th>
                    <th>ID</th>
                    <th>Precio</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => {
                    const {
                      id,
                      orderDate,
                      orderTime,
                      orderAmount,
                      orderStatus,
                    } = order;
                    return (
                      <tr key={id} onClick={() => handleClick(id)}>
                        <td>{index + 1}</td>
                        <td>
                          {changeDateFormat(orderDate)} a las {orderTime}
                        </td>
                        <td>{id}</td>
                        <td>
                          {orderAmount}
                          {"€"}
                        </td>
                        <td>
                          <p
                            className={
                              orderStatus !== "Delivered"
                                ? `${styles.pending}`
                                : `${styles.delivered}`
                            }
                          >
                            {translateOrderStatus(orderStatus)}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default Orders;

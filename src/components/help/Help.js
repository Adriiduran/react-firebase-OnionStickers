import React from "react";
import styles from "./Help.module.scss";

const Help = () => {
  return (
    <section className={styles["help-section"]}>
      <h2>Preguntas Frecuentes</h2>
      <div className={styles["faq-item"]}>
        <h3>¿Cuál es el proceso de compra?</h3>
        <p>Para realizar una compra, sigue estos pasos:</p>
        <ol>
          <li>
            Selecciona los productos que deseas y agrégalos al carrito de
            compras.
          </li>
          <li>
            Ve al carrito de compras y revisa los artículos seleccionados.
          </li>
          <li>Procede al pago y proporciona la información de envío.</li>
          <li>Confirma la orden y realiza el pago.</li>
        </ol>
      </div>

      <div className={styles["faq-item"]}>
        <h3>¿Cuáles son las opciones de pago disponibles?</h3>
        <p>
          Aceptamos pagos con tarjeta de crédito y PayPal como métodos de pago
          seguros.
        </p>
      </div>

      <div className={styles["faq-item"]}>
        <h3>¿Cuánto tiempo tarda en llegar mi pedido?</h3>
        <p>
          El tiempo de entrega puede variar según tu ubicación. Por lo general,
          los pedidos se entregan en un plazo de 5 a 7 días hábiles.
        </p>
      </div>

      <div className={styles["faq-item"]}>
        <h3>¿Puedo cancelar mi pedido después de realizarlo?</h3>
        <p>
          Sí, puedes cancelar tu pedido siempre y cuando no haya sido enviado.
          Te recomendamos comunicarte con nuestro equipo de atención al cliente
          lo antes posible para gestionar la cancelación.
        </p>
      </div>

      <div className={styles["faq-item"]}>
        <h3>¿Cómo puedo realizar un seguimiento de mi pedido?</h3>
        <p>
          Una vez que tu pedido haya sido enviado, recibirás un correo
          electrónico con un enlace de seguimiento. Puedes hacer clic en ese
          enlace para rastrear la ubicación y el estado de tu paquete.
        </p>
      </div>

      <div className={styles["faq-item"]}>
        <h3>¿Cuál es el proceso de devolución?</h3>
        <p>Si deseas realizar una devolución, sigue estos pasos:</p>
        <ol>
          <li>Comunícate con nuestro equipo de atención al cliente para iniciar el proceso de devolución.</li>
          <li>Empaqueta el producto de manera segura y envíalo de vuelta a nuestra dirección de devolución.</li>
          <li>Una vez que recibamos el producto y lo hayamos verificado, procesaremos el reembolso correspondiente.</li>
        </ol>
      </div>
    </section>
  );
};

export default Help;

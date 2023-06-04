import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <section>
      <div className="container">
        <h2>Compra relizada con éxito</h2>
        <p>Gracias por tu compra</p>
        <br />

        <button className="--btn --btn-primary">
          <Link to="/order-history">Comprobar el estado del pedido</Link>
        </button>
      </div>
    </section>
  );
};

export default CheckoutSuccess;

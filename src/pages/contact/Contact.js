import { useRef } from "react";
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_mlggfgf",
        form.current,
        "UYhE5sNpmLp7L8IsK"
      )
      .then(
        (result) => {
          toast.success("Mensaje mandado correctamente");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Nombre</label>
              <input
                type="text"
                name="user_name"
                placeholder="Nombre completo"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <label>Asunto</label>
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                required
              />
              <label>Mensaje</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">Enviar mensaje</button>
            </Card>
          </form>

          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3 style={{fontWeight: "600"}}>Nuestra información de contacto</h3>
              <p>Rellena el formulario o contacta con nosotros:</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+34 626 123 465</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>contacto@onionstickers.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Utrera, Sevilla</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@OnionStickers</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

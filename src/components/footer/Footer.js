import React from "react";
import styles from "./Footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return <div className={styles.footer}>&copy; OnionStickers {year} - Todos los derechos reservados</div>;
};

export default Footer;

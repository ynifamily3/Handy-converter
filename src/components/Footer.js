import React from "react";
import styles from "./Footer.module.scss";

function Footer(props) {
  const { wrapper } = styles;
  return <div className={wrapper}>ⓒ Miel.dev Corp.</div>;
}

export default Footer;

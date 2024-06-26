import React from "react";
import styles from "./Footer.module.css";
import Logo from "../images/AP_Logo_casita_modif_21_blanco.png";
import MailIcon from "../images/mail-alt-svgrepo-com.svg";
import PhoneIcon from "../images/phone-svgrepo-com.svg";
import InstagramIcon from "../images/instagram-f-svgrepo-com.svg";
import FacebookIcon from "../images/facebook-round-svgrepo-com.svg";

function Footer() {
  return (
    <div>
      <div className={styles.footerBg}>
        <div className="pt-20 sm:pt-0 sm:flex sm:flex-col sm:items-center">

          {/* MENSAJE */}
          <div className="flex flex-col items-center">
            <h2 className="font-raleway text-white font-semibold tracking-widest">
              VISITA USHUAIA
            </h2>
            <h1 className="font-raleway text-white font-semibold text-4xl">
              Contactanos!
            </h1>
          </div>

          {/* DATOS */}
          <div className="flex flex-col items-center mt-9 gap-2">
            <div className="flex flex-row items-center">
              <img
                className="h-6 md:h-7"
                src={PhoneIcon}
                alt="phone icon"
              />
              <p className="font-raleway text-white font-bold ml-2 md:text-lg">
                +54 9 2901-123456
              </p>
            </div>
            <div className="flex flex-row items-center">
              <img
                className="h-6 md:h-7"
                src={MailIcon}
                alt="mail icon"
              />
              <p className="font-raleway text-white font-bold ml-2 md:text-lg">
                test@gmail.com
              </p>
            </div>
          </div>

          {/* REDES */}
          <div className="flex flex-row gap-3 justify-center mt-9">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="h-9 md:h-10"
                src={FacebookIcon}
                alt="Facebook Icon"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="h-9 md:h-10"
                src={InstagramIcon}
                alt="Instagram Icon"
              />
            </a>
          </div>
        </div>

        {/* LOGO */}
        <div className="hidden sm:block">
          <img className="opacity-40" src={Logo} alt="footer logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

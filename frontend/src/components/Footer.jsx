import "../App.css";
import "./styles/Footer.css";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <>
      <div className="footerSocialMedia">
        <img src={fb} alt="Logo de Facebook" />
        <img src={insta} alt="Logo d'Instagram" />
        <img src={twitter} alt="Logo of Twitter" />
      </div>
      <div className="footerText">
        <p>© Capitains de Planète</p>
        <p>contact@capitainsdeplanete.com</p>
      </div>
    </>
  );
}

import "../App.css";
import "./styles/Footer.css";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerSocialMedia">
        <img src={fb} alt="Logo de Facebook" />
        <img src={insta} alt="Logo d'Instagram" />
        <img src={twitter} alt="Logo of Twitter" />
      </div>
      <div className="footerText">
        <a href="mailto:m.bluth@example.com">contact@capitainsdeplanete.com</a>
        <p>© Capitains de Planète</p>
      </div>
    </div>
  );
}

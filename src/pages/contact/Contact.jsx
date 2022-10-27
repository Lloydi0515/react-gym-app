import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get in Touch" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nisi
        tenetur eos modi, a velit.
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a
              href="mailto:lloydfernandez15@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+0927968179.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

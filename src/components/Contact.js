import emailjs from "emailjs-com";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  {
    id: 1,
    label: "Telefone",
    value: "+55 65 9.9283-3530",
    icon: "fas fa-phone-alt",
  },
  { id: 2, 
    label: "E-mail", 
    value: "dev.jefersonmacedo@gmail.com", 
    icon: "fas fa-envelope",
  },
  {
    id: 3,
    label: "Estou",
    value: "Brasil e no mundo",
    icon: "fas fa-map-marker-alt",
  },
];

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
    subject: "",
  });
  const { name, email, tel, subject, message } = mailData;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      ((tel.length > 9 && tel.length < 12) && (parseInt(tel,10))) ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
    } else {
      emailjs
        .send(
          "gmail-dev.jefersonmacedo", // service id
          "template_tsvqybr", // template id
          mailData,
          "6osJxfvLx7PrNYF4x" // public key api
        )
        .then(
          (response) => {
            setError(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
            setMailData({ name: "", email: "", tel: "", message: "", subject: "" });
          },
          (err) => {
            alert("erro ao enviar o email, favor entrar em contato pelo botão de WhatsApp.");
          }
        );
    }
  };

  return (
    <section id="contactus" className="section contactus-section bg-gray">
      <div className="container">
        <SectionTitle
          heading={"Vamos conversar sobre seu projeto"}
          subHeading={"Contato"}
        />
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form">
              <h6>Entrar em contato</h6>
              <p className="lead">
                Amaremos ouvir você.
              </p>
              <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
                <div className="row gx-3 gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Nome</label>
                      <input
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        id="name"
                        placeholder="Nome *"
                        className={`form-control ${
                          error ? (name.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Seu E-mail</label>
                      <input
                        name="email"
                        onChange={(e) => onChange(e)}
                        value={email}
                        id="email"
                        placeholder="E-mail *"
                        className={`form-control ${
                          error ? (email.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="email"
                      />
                    </div>
                  </div>
                  {/* TO-DO - Implementar mascara para o telefone */}
                  {/* TO-DO - Melhorar a validação de telefone */}
                  {/* TO-DO - Implementar a opção para inserir números estrangeiros */}
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Telefone</label>
                      <input
                        name="tel"
                        onChange={(e) => onChange(e)}
                        value={tel}
                        id="tel"
                        placeholder="Seu telefone com WhatsApp *"
                        className={`form-control ${
                          error ? (((tel.length > 9 && tel.length < 12) && (parseInt(tel,10))) ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Assunto</label>
                      <input
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id="subject"
                        placeholder="Nome do projeto ou assunto *"
                        className={`form-control ${
                          error ? (subject.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Sua mensagem</label>
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
                        placeholder="Sua mensagem *"
                        rows={3}
                        className={`form-control ${
                          error ? (message.length !== 0 ? "" : "invalid") : ""
                        }`}
                      />
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{ display: success ? "block" : "none" }}
                    >
                      Mensagem enviada com sucesso. Em breve retornaremos seu contato.
                    </span>
                  </div>
                  {/*  TO-DO - Implementar ferramenta para evitar o spam de email (captcha ou outro tipo de restrição de envio de e-mail) */}
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn px-btn-theme2"
                        type="submit"
                        value="Send"
                      >
                        {" "}
                        Enviar mensagem
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 ms-auto col-xl-5 pt-5 pt-lg-0">
            <ul className="contact-infos">
              {contactInfo.map((contact) => (
                <li key={contact.id}>
                  <div className="icon">
                    <i className={contact.icon} />
                  </div>
                  <div className="col">
                    <h5>{contact.label}</h5>
                    <p>{contact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center pt-5">
              <img src="assets/img/contact.svg" className="svg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

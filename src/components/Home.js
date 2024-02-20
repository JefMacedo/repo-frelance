const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="effect-1">
        <img src="assets/img/effect-1.svg" className="svg" alt="image" />
      </div>
      <div className="effect-2">
        <img src="assets/img/effect-2.svg" className="svg" alt="image" />
      </div>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-6 pe-xl-5 py-5">
            <div className="home-intro one-page-nav">
              <h6>
                <span>Olá!</span>
              </h6>
              <h1>
                Eu faço <br />
                A construção <br />
                Do seu projeto!
              </h1>
              <p>
                Eu planejo e desenvolvo soluções e projetos
                para clientes de todos os tamanhos e setores.
                Sou especializado na criação de sites,
                landing page, serviços web, projetos personalizados,
                lojas online com design elegante e moderno.
              </p>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" target="_blank" href="https://wa.me/65992833530">
                  <i className="fab fa-whatsapp" /> Vamos Conversar
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-image">
              <img src="assets/img/home-banner.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;

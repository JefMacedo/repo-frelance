import SectionTitle from "./SectionTitle";

const serviceData = [
  {
    id: 1,
    name: "Web Design",
    icon: "bi bi-phone",
    desc: "Ofereço um serviço personalizado, que leva em conta as suas necessidades, o seu público-alvo e seus objetivos. Utilizo as melhores ferramentas e tecnologias do mercado para garantir um excelente resultado final.",
  },
  {
    id: 2,
    name: "Desenvolvimento",
    icon: "bi bi-laptop",
    desc: "Ofereço um serviço de desenvolvimento completo, que abrange desde o planejamento, o design, a programação, o teste, a implantação e a manutenção do seu projeto web. utilizando as melhores práticas e metodologias do mercado.",
  },
  {
    id: 3,
    name: "SEO e Marketing",
    icon: "bi bi-triangle",
    desc: "Implemento as principais e melhores técnicas de SEO, como pesquisa de palavras-chave, otimização de títulos, meta tags, URLs, imagens, conteúdo, links internos e externos, velocidade de carregamento, responsividade, entre outras, para garantir que o seu site seja encontrado, performático e ranqueado pelos mecanismos de busca.",
  },
  {
    id: 4,
    name: "Projetos Personalizados",
    icon: "bi bi-columns",
    desc: "Construo projetos personalizado e customizado de acordo com sua necessidade utilizando com as principais linguagens e frameworks do mercado, como HTML, CSS, JavaScript, React, Angular, Node, Next, MongoDB, Firebase, entre outras, para garantir que o seu projeto seja moderno, interativo e seguro. oferecendo um serviço completo.",
  },
  {
    id: 5,
    name: "Manutenção",
    icon: "bi bi-distribute-vertical",
    desc: "Realizo a manutenção e atualização dos seus projetos com objetivo de alcançar padrões de performance, segurança crescimento e qualquer outra métrica desejada. Também ajudo na correção de bugs, erros/falhas, backup dos dados, layouts entre outros.",
  },
  {
    id: 6,
    name: "Tráfego orgânico",
    icon: "bi bi-globe2",
    desc: "Ofereço a otimização do seu site para os mecanismos de busca, como o Google, para que você tenha mais visibilidade e tráfego orgânico. Também te ajudo a analisar o tráfego orgânico do seu site, utilizando ferramentas de análise, como o Google Analytics, para entender o comportamento dos visitantes, identificar as páginas mais populares, verificar as palavras-chave que geram mais tráfego e monitorar as taxas de conversão.",
  },
];

// TO-DO - corrigir o tamanho dos cards para que fiquem no mesmo tamanho.
// TO-DO - Melhorar os textos.
const Services = () => {
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Serviços que eu ofereço"} subHeading={"Serviços"} />
        <div className="row gy-4">
          {serviceData.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.id}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>0{service.id}</span>
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.desc}</p>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;

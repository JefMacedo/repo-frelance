import SectionTitle from "./SectionTitle";

const skillsData = [
  { id: 1, name: "HTML", icon: "fab fa-html5" },
  { id: 2, name: "CSS", icon: "fab fa-css3" },
  { id: 3, name: "React JS", icon: "fab fa-react" },
  { id: 4, name: "Wordpress", icon: "fab fa-wordpress-simple" },
  { id: 5, name: "iOs App", icon: "fab fa-apple" },
  { id: 6, name: "App Dev", icon: "fab fa-android" },
];
const experiencesData = [
  {
    id: 1,
    date: "Mar 2018 - Presente",
    designation: "Dev Full Stack",
    company: "JTI DEV",
  },
  {
    id: 2,
    date: "Nov 2022 - Presente",
    designation: "Dev Backend",
    company: "Ene Soluções",
  },
  {
    id: 3,
    date: "Jun 2022 - Out 2022",
    designation: "Dev Full Stack",
    company: "SPRO It Solution",
  },
  {
    id: 4,
    date: "Jan 2021 - Mai 2022",
    designation: "Dev Full Stack",
    company: "Liberali",
  },
];
const Skill = () => {
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionTitle
              heading={"Skills e  Experiências"}
              subHeading={"Experiência"}
              text={
                "Eu desenho e desenvolvo serviços para clientes de todos os tamanhos, especializando-me na criação de sites, serviços web, projetos personalizados e lojas online elegantes e modernos."
              }
            />

            <div className="skill-box">
              <h3>Minhas Habilidades</h3>
              <div className="row g-3">
                {skillsData.map((skill) => (
                  <div className="col-6 col-md-4 col-lg-6" key={skill.id}>
                    <div className="feature-box-02">
                      <div className="icon">
                        <i className={skill.icon} />
                      </div>
                      <h6>{skill.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0">
            {/* <div className="experience-box">
              <h3>Experience</h3>
              <ul>
                {experiencesData.map((experience) => (
                  <li key={experience.id}>
                    <h6>{experience.date}</h6>
                    <div className="eb-right">
                      <h5>{experience.designation}</h5>
                      <span>{experience.company}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}
            <div className="experience-user">
              <span className="eu-1">
                <img
                  src="assets/img/effect-3.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <span className="eu-2">
                <img
                  src="assets/img/effect-4.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <div className="avatar">
                <img src="assets/img/avatar.png" alt="image" />
              </div>
              <a className="px-btn px-btn-theme2" href="#contactus">
                Fale comigo{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;

import "../App.css";

const Skills = () => {
  return (
    <section id="Skills">
      <div className="skill">
        <div className="skill_both">
          <div className="skill_1">
            <span>I,m Expert On</span>
            <div>Let,s Work Together!</div>

            <p>
              Hey,
               Are you looking for an amazing-looking website then you are
              in the right place? I am Mudassir jamal hashim a passionate <b> front-end
              web & App developer </b>.
            </p>

            <a href="#Home">
              {" "}
              <button>Hire Me Now</button>
            </a>
          </div>

          <div className="skill_2">
            <div className="bar_main">
              <h3>HTML</h3>
              <div className="bar html">
                {" "}
                <span></span>{" "}
              </div>
            </div>

            <div className="bar_main">
              <h3>CSS</h3>
              <div className="bar css">
                {" "}
                <span></span>{" "}
              </div>
            </div>

            <div className="bar_main">
              <h3>JavaScript</h3>
              <div className="bar js">
                {" "}
                <span></span>{" "}
              </div>
            </div>

            <div className="bar_main">
              <h3>React Js</h3>
              <div className="bar reactjs">
                {" "}
                <span></span>{" "}
              </div>
            </div>

            <div className="bar_main">
              <h3>React Native</h3>
              <div className="bar reactnt">
                {" "}
                <span></span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

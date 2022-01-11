import React from "react";
import "../App.css";
import img from "../images/mine1.jpeg";
import { FcAbout } from "react-icons/fc";

const About = () => {
  return (
    <section id="About">
      <div className="about">
        <section className="ab_sec_1">
          <h1>
            About Me <FcAbout />
          </h1>
          <p>
          I am a passionate Front-End Developer.
          If you take a look at my Front End Web Development work and feel that I could help you, I’ll do it best for you.
          </p>
          <div className="underline"></div>
        </section>

        <div className="ab_both_sec">
          <section className="ab_sec_2">
            <div className="ab_sec_bf">
              <div className="ab_sec_img">
                <img src={img} alt="ine" height="440" />
              </div>
            </div>
          </section>

          <section className="ab_sec_3">
            <div>
              <strong>Hi There</strong>
              <p>
                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui
                at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
                efficitur sagittis, urna est ultricies eros, ac porta sem turpis
              </p>

              <p>
                nunc id efficitur sagittis, urna est ultricies eros, ac porta
                sem turpis porta sem turpis quis leo. Nulla in feugiat elit
              </p>

              <div className="main_ab_col">
                <div className="ab_col_1">
                  <div className="ab_col_in_1">
                    <span>Name:</span>
                    <p>Mudassir jamal</p>
                  </div>
                  <div className="ab_col_in_1">
                    <span>Email:</span>
                    <p>jamalmudassir65@gmail.com</p>
                  </div>
                </div>

                <div className="ab_col_2">
                  <div className="ab_col_in_2">
                    <span>Insta:</span>
                    <p>Mudassir-8486</p>
                  </div>

                  <div className="ab_col_in_2">
                    <span>Phone:</span>
                    <p>0301-2671774</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;

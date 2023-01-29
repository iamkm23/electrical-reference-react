import React from "react";

const About = () => {
  return (
    <section className="section">
      <section className="section-center">
        <div className="profile-center">
          <img
            src={require("../images/kmo.png")}
            alt="profile-pic"
            className="profile-img"
          />
          <h3>
            Howdy, I'm Kyaw Myo Oo. I am an aspiring Electrical Enginner and
            Programmer living in Singapore.
          </h3>
        </div>
      </section>
    </section>
  );
};

export default About;

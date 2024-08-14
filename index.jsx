import React from "react";
import "./style.css";

export const NewVersion = () => {
  return (
    <div className="new-version">
      <div className="div">
        <div className="overlap-group">
          <img className="IMG" alt="Img" src="IMG-3510-1.png" />
          <div className="buttons">
            <div className="frame">
              <a
                className="text-wrapper"
                href="https://www.linkedin.com/in/natalieboni"
                rel="noopener noreferrer"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
          <img className="natalie-bonilla" alt="Natalie bonilla" src="natalie-bonilla-DESIGNNAB-2024-final-1.png" />
          <p className="NATALIE-a-BONI">NATALIE A. BONI&nbsp;&nbsp;|&nbsp;&nbsp;FinTech Product Designer</p>
        </div>
        <div className="text-header">
          <div className="text-wrapper-2">Stamford, CT</div>
          <p className="NABBING-high-impact">
            <span className="span">NABBING</span>
            <span className="text-wrapper-3">
              {" "}
              high-impact visual solutions through strategic design, turning concepts into profitable products and
              services. A multidisciplinary skill set honed across finance, B2B, and retail serves to craft attractive
              designs that resonate. Exceptional client relationships and a department liaison for cross-functional
              coordination ensure seamless delivery. Experienced in project management and leveraging agile
              methodologies for progressive outcomes. Contributing to the creation of impactful products that benefit
              all stakeholders.
            </span>
          </p>
          <img
            className="location-pin"
            alt="Location pin"
            src="location-pin-3-navigation-map-maps-pin-gps-location.svg"
          />
        </div>
        <p className="copyright-natalie-a">© COPYRIGHT NATALIE A. BONI</p>
      </div>
    </div>
  );
};

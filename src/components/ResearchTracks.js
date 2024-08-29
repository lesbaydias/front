import React from "react";
import image1 from "./7b1632dc-b879-4c30-9130-487038e5043b.jpg"; // Replace with actual paths
import image2 from "./7b1632dc-b879-4c30-9130-487038e5043b.jpg";
import image3 from "./7b1632dc-b879-4c30-9130-487038e5043b.jpg";

const ResearchTracks = () => {
  return (
    <section className="section light-section" id="research-tracks">
      <h2 className="section-title" id="research-track">Research Tracks</h2>
      <div className="research-tracks-container">
        <div className="research-track">
          <img src={image1} alt="Governance" className="research-image" />
          <h3 className="research-title">Governance</h3>
          <p className="research-description">
            This track will focus on issues of quality of governance such as public finance management, public HRM, ICT and its impact on regional and local development.
          </p>
        </div>
        <div className="research-track">
          <img src={image2} alt="Public Health and Education" className="research-image" />
          <h3 className="research-title">Public Health and Education</h3>
          <p className="research-description">
            This track will focus on evidence-based policy research and capacity building in regional and local management of healthcare and education.
          </p>
        </div>
        <div className="research-track">
          <img src={image3} alt="Neighborhood Development" className="research-image" />
          <h3 className="research-title">Neighborhood Development</h3>
          <p className="research-description">
            This track will focus on regional and local economic development research and solutions, including the development of local entrepreneurial potential, as well as agricultural and industrial development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchTracks;

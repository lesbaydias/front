import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDollarSign, faUsers, faAward } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Projects = () => {
  return (
    <section className="section light-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="project-detail">
          <h3>
            <FontAwesomeIcon icon={faAward} className="icon" /> “Decentralization, Local Governance and Regional Development in Kazakhstan” (2024-2026)
          </h3>
          <p><strong className="abs"><FontAwesomeIcon icon={faUser} className="icon" /> Principal Investigator:</strong> Bauyrzhan Yedgenov</p>
          <p><strong className="abs"><FontAwesomeIcon icon={faDollarSign} className="icon" /> Amount:</strong> 83 180 290 KZT (~ 174,187 USD)</p>
          <p><strong className="abs"><FontAwesomeIcon icon={faUsers} className="icon" /> Research Team:</strong> Dr. Alisher Aldashev (Kazakh-British Technical University, Kazakhstan), Olzhas Zhorayev (George Mason University, USA), Bekzhan Tolybay (Cambodia), Abylay Tursyn (Narxoz, Kazakhstan), Azamat Sadykov (Sagadiev University of International Business)</p>
          <p><strong className="abs"><FontAwesomeIcon icon={faAward} className="icon" /> Funding:</strong> Grant Funding for Scientific and (or) Scientific and Technical Projects for 2024-2026, awarded by the Ministry of Science and Higher Education of the Republic of Kazakhstan.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

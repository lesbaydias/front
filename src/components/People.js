import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Using FaPlus for the toggle button

const ProfileCard = ({ name, title, brief, fullText }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="profile-card">
      <img
        src="https://via.placeholder.com/150"
        alt={name}
        className="profile-image"
      />
      <h4>{name}</h4>
      <p className="profile-title">{title}</p>
      <div className={`profile-description ${expanded ? "expanded" : ""}`}>
        <p>{fullText}</p>
      </div>
      <button className="toggle-btn" onClick={toggleDescription}>
        {expanded ? "Show Less" : "Read More"}
        <FaPlus className={`toggle-icon ${expanded ? "rotated" : ""}`} />
      </button>
    </div>
  );
};

const People = () => {
  return (
    <section className="people-section" id="people">
      <h2 className="section-title">Our People</h2>
      <div className="team">
        <div className="team-title">Leadership</div>
        <ProfileCard
          name="Bauyrzhan Yedgenov"
          title="PhD Associate Director"
          brief="Brief information about Bauyrzhan Yedgenov..."
          fullText="Bauyrzhan Yedgenov is an Assistant Professor at SDU University. He is also an affiliated senior research associate at the International Center for Public Policy at Georgia State University (USA) since 2017. His primary research interests are Public Economics and Development Economics..."
        />
        <ProfileCard
          name="Bekzhan Tolybay"
          title="MA Deputy Director"
          brief="Brief information about Bekzhan Tolybay..."
          fullText="Bekzhan Tolybay is a master's program student at SDU University. The topic of his dissertation is 'Fiscal Decentralization: Review of Intergovernmental Relations in Kazakhstan.' Currently, Bezhan works as the Director of the Corporate Development Department at SDU University..."
        />
        <div className="team-title">Research Associates</div>
        <ProfileCard
          name="Abylay Tursyn"
          title="PhD Candidate"
          brief="Brief information about Abylay Tursyn..."
          fullText="Mr. Tursyn is currently a PhD student at Narxoz University and his topic of dissertation is the determinants of success of government tenders and public procurement. He is also CEO and lead developer of TADS Studio, which develops ERP systems for companies..."
        />
        <ProfileCard
          name="Nurzhan Mukashev"
          title="PhD"
          brief="Brief information about Nurzhan Mukashev..."
          fullText="Nurzhan Mukashev is a PhD Research Associate specializing in Public Health. His research focuses on the impact of public health policies and their implementation..."
        />
      </div>
    </section>
  );
};

export default People;

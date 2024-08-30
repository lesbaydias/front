import React from "react";

const ProfileCard = ({ name, title, fullText }) => {
  return (
    <div className="profile-card">
      <div className="profile-card-inner">
        {/* Front Face */}
        <div className="profile-card-front">
          <img
            src="https://via.placeholder.com/150"
            alt={name}
            className="profile-image"
          />
          <h4 className="profile-title">{name}</h4>
          <p className="profile-title">{title}</p>
        </div>

        {/* Back Face */}
        <div className="profile-card-back">
          <div className="profile-description">{fullText}</div>
        </div>
      </div>
    </div>
  );
};

const People = () => {
  return (
    <section className="people-section" id="people">
      <h2 className="section-title">Our People</h2>
      <div className="team">
        <div className="prof"><ProfileCard
          name="Bauyrzhan Yedgenov, PhD Associate Director"
          title="Associate Director (Governance, Education)"
          fullText="Bauyrzhan Yedgenov is an Assistant Professor at SDU University. He is also an affiliated senior research associate at the International Center for Public Policy in the Andrew Young School of Policy Studies at Georgia State University (USA) since 2017. His primary research interests are Public Economics and Development Economics, specifically state and local public finance, fiscal federalism, taxation, the progressivity of personal income taxes, and their relation to economic development and growth."
        /></div>
        <div className="prof"><ProfileCard
          name="Bekzhan Tolybay, MA Economics"
          title="Deputy Director (Governance)"
          fullText="Master's program student at SDU University. His dissertation is on 'Fiscal Decentralization: Review of Intergovernmental Relations in Kazakhstan.' He is the Director of Corporate Development at SDU University."
        /></div>
        <div className="prof">
        <ProfileCard
          name="Abylay Tursyn"
          title="PhD Candidate"
          fullText="Mr. Tursyn is a PhD student at Narxoz University, researching government tenders and public procurement success factors. He is also CEO and lead developer at TADS Studio."
        />
        </div>
        <div className="prof">
        <ProfileCard
          name="Nurzhan Mukashev"
          title="PhD"
          fullText="Nurzhan Mukashev is a PhD Research Associate specializing in Public Health, with research on the impact of public health policies and their implementation."
        />
        </div>
      </div>
    </section>
  );
};

export default People;

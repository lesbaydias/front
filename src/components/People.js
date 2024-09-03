import React from "react";
import bauyrzhanImage from './bauyrzhan.jpg';
import bekzhanImage from './bekzhan.png';
import abylayImage from './abylay.png';
import alisherImage from './alisher.png';
import nurzhanImage from './nurzhan.png';
import olzhasImage from './olzhas.png';
import urbanImage from './urban.png';

const ProfileBlock = ({ name, title, fullText, imageUrl }) => {
  return (
    <div className="profile-block">
      <img
        src={imageUrl}
        alt={name}
        className="profile-image"
      />
      <div className="profile-details">
        <div className="inRow"><h4 className="profile-name">{name}</h4></div>
        <div className="inRow"><p className="profile-title">{title}</p></div>
        <div className="inRow"><p className="profile-description">{fullText}</p></div>
      </div>
    </div>
  );
};


const People = () => {
  return (
    <section className="people-section" id="people">
      <div className="team">
      <div className="title-wrapper">
          <div className="title-bar2"></div>
          <h2 className="section-title2">Our People</h2>
        </div>
       <div>
        <ProfileBlock
          name="Bauyrzhan Yedgenov, PhD Associate Director"
          title="Associate Director (Governance, Education)"
          fullText="Bauyrzhan Yedgenov is an Assistant Professor at SDU University and a Senior Research Associate at the International Center for Public Policy at Georgia State University. His research focuses on Public and Development Economics, particularly in areas like fiscal federalism, taxation, and economic growth. He has published in top journals such as World Development, Journal of Economics Geography, and the European Journal of Political Economy, with a focus on fiscal decentralization's impact on economic growth, often using geography indicators for causality analysis"
          imageUrl={bauyrzhanImage}
        />
        </div>
        <div>
        <ProfileBlock
          name="Bekzhan Tolybay, MA Economics"
          title="Deputy Director (Governance)"
          fullText="Master's program student at SDU University. His dissertation is on 'Fiscal Decentralization: Review of Intergovernmental Relations in Kazakhstan.He is the Director of the Corporate Development Department at SDU, overseeing external relations and commercial projects. As the curator of SDU Technopark, he collaborates on IT projects with private companies. Bezhan has 10 years of experience in the public sector, working with central and regional authorities, including the South Kazakhstan and Aktobe region akimats. His interests are in public administration, regional development, and international relations."
          imageUrl={bekzhanImage}
        /></div>
        <div>
        <ProfileBlock
          name="Ugur Choban, PhD Management"
          title="Research Associate (Economic Development)"
          fullText="Dr. Choban, a distinguished academic with 18 years in academia and 29 years in education, holds a PhD from the University of Kebangsaan Malaysia. He is a faculty member and Research Coordinator at SDU University, Kazakhstan, specializing in Entrepreneurship and Social Capital. His notable research includes “Social Networks and Entrepreneurships – Does Personal Networks Matter?”. Dr. Choban earned his bachelor's degree from Istanbul University and a master's from SDU University, and teaches Financial Management, Accounting, and Corporate Finance."
          imageUrl={urbanImage}
        />
        </div>
        <div>
        <ProfileBlock
          name="Nurzhan Mukashev, MD, PhD Health Policy and Management"
          title="Research Associate (Healthcare)"
          fullText="Dr. Mukashev, an Assistant Professor at SDU University Business School, holds an MD from Semey Medical University, a PhD in Health Policy and Management from Tulane University, and a Master of Health Services Administration from the University of Michigan. He directs the Center for Health, Policy and Management, focusing on the links between health services, climate, equity, and IT. His research, published in top journals like Health Affairs, involves quantitative data analyses. With extensive experience in healthcare in Kazakhstan and the USA, and involvement in national projects funded by the Asian Development Bank and WHO, he aims to address public health issues at both regional and local levels."
          imageUrl={nurzhanImage}
        />
        </div>
        <div>
        <ProfileBlock
          name="Abylay Tursyn, PhD Candidate Economics"
          title="Research Associate (Governance)"
          fullText="Mr. Tursyn is a PhD student at Narxoz University, focusing on the determinants of success in government tenders and public procurement. He is the CEO and lead developer at TADS Studio, specializing in ERP systems. His interests include economics, IT, and research, and he has contributed to medical research projects and developed web resources for the Kazakh language transition to the Latin alphabet. He has also published an article on e-banking at an international conference."
          imageUrl={abylayImage}
        />
        </div>
        <div>
        <ProfileBlock
          name="Alisher Tleubayev, PhD Agriculture Economics"
          title="Research Affiliate (Economic development)"
          fullText="Dr. Alisher Tleubayev is a Postdoctoral Scholar at the Graduate School of Public Policy, holding a Ph.D. in Agricultural Economics from Martin Luther University Halle-Wittenberg, Germany. His research focuses on gender and agricultural economics, farm efficiency, digitalization in agriculture, corporate governance, and gender inequality. He has previously been a Research Fellow at the Leibniz Institute of Agricultural Development and a Visiting Researcher at American University."
          imageUrl={alisherImage}
        />
        </div>
        <div>
        <ProfileBlock
          name="Olzhas Zhorayev, PhD Candidate Public Policy"
          title="Research Affiliate (Governance)"
          fullText="Olzhas Zhorayev is a Research Fellow at the Central Asian Institute for Development Studies and the Schar School of Policy and Government, George Mason University. He has previously served as Deputy Director at the Center for Strategic Research and Analysis, Director of Research at the Center for Strategic Initiatives, and Deputy Director at KazMunayGas. His work focused on strategic and budget planning, evaluating state budget performance, and administrative and fiscal reforms. He has contributed to policy reports and memos on economic and fiscal issues for top government officials."
          imageUrl={olzhasImage}
        />
        </div>
      </div>
    </section>
  );
};

export default People;

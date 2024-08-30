import React from "react";
import bauyrzhanImage from './bauyrzhan.jpg';
import bekzhanImage from './bekzhan.png';
import abylayImage from './abylay.png';
import alisherImage from './alisher.png';
import nurzhanImage from './nurzhan.png';
import olzhasImage from './olzhas.png';
import urbanImage from './urban.png';




const ProfileCard = ({ name, title, fullText, imageUrl}) => {
  return (
    <div className="profile-card">
      <div className="profile-card-inner">
        {/* Front Face */}
        <div className="profile-card-front">
          <img
            src={imageUrl} // Use the imageUrl prop for different images
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
          imageUrl={bauyrzhanImage}
        /></div>
        <div className="prof"><ProfileCard
          name="Bekzhan Tolybay, MA Economics"
          title="Deputy Director (Governance)"
          fullText="Master's program student at SDU University. His dissertation is on 'Fiscal Decentralization: Review of Intergovernmental Relations in Kazakhstan.' He is the Director of Corporate Development at SDU University."
          imageUrl={bekzhanImage}
        /></div>
        <div className="prof">
        <ProfileCard
          name="Ugur Choban, PhD Management"
          title="Research Associate (Economic Development)"
          fullText="Dr. Choban is a seasoned academic with 18 years in academia and 29 years in education. Holding a PhD from the University of Kebangsaan Malaysia, he's currently a faculty member at SDU University, Kazakhstan, and serves as the Research Coordinator for the Business School. His research interests lie in Entrepreneurship and Social Capital, with notable works like “Social Networks and Entrepreneurships – Does Personal Networks Matter?”. He earned his bachelor's degree at Istanbul University and a master's from SDU University. Dr. Choban's teaching expertise includes Financial Management, Principles of Accounting, Cost Accounting, and Corporate Finance, demonstrating his extensive knowledge and versatility in the field."
          imageUrl={urbanImage}
      
       />
        </div>
        <div className="prof">
        <ProfileCard
          name="Nurzhan Mukashev, MD, PhD Health Policy and Management"
          title="Research Associate (Healthcare)"
          fullText="Dr.  Mukashev has an MD degree (Semey Medical University), PhD in Health Policy and Management (Tulane University, USA), Master of Health Services Administration (University of Michigan - Ann Arbor, USA). Dr. Mukashev holds the position of Assistant Professor at SDU University Business School (Kazakhstan), where he also directs the Center for Health, Policy and Management. His research interests relate to the linkage between population health & health services and climate, equity, and information technology. He employs various research methods in his projects with quantitative data analyses. Nurzhan has published in top healthcare journals like Health Affairs (Q1, 93%)."
          imageUrl={nurzhanImage}
       
       /></div>
        <div className="prof">
          <ProfileCard
          name="Abylay Tursyn, PhD Candidate Economics"
          title="Research Associate (Governance)"
          fullText="Mr. Tursyn is currently a PhD student at Narxoz University and his topic of dissertation is the determinants of success of government tenders and public procurement. He also as CEO and lead developer of TADS Studio - development of ERP systems for companies. Interested in economics, IT, research in general, public procurements. Participated in research projects as a developer in medical research project and development of web books for Kazakh language to assist in transition to Latin alphabet. Published article in international conference about e-banking."
          imageUrl={abylayImage}
        
        /></div>

<div className="prof">
          <ProfileCard
          name="Alisher Tleubayev, PhD Agriculture Economics"
          title="Research Affiliate (Economic development)"
          fullText="Alisher Tleubayev is a Postdoctoral Scholar at the Graduate School of Public Policy. He obtained his Ph.D. degree in agricultural economics from the Martin Luther University Halle-Wittenberg, Germany. Dr. Tleubayev’s broader research interests include gender and agricultural economics, including farm efficiency, digitalization in agriculture, corporate governance in agri-food enterprises and gender inequality. He has worked as a Research Fellow at the Leibniz Institute of Agricultural Development in Transition Economies (IAMO), Germany and as a Visiting Researcher at the American University, USA."
          imageUrl={alisherImage}
       
       /></div>

<div className="prof">
          <ProfileCard
          name="Olzhas Zhorayev, PhD Candidate Public Policy"
          title="Research affiliate (Governance)"
          fullText="Olzhas Zhorayev is Research Fellow at the Central Asian Institute for Development Studies, and at the Schar School of Policy and Government, George Mason University. Previously he worked as Deputy Director of the Center for Strategic Research and Analysis at the Executive Office of the President of Kazakhstan, Director of Research at the Center for Strategic Initiatives, and Deputy Director of the Department of Strategy and Analytics at KazMunayGas National Company. While working in the public sector, he was responsible for strategic and budget planning policy design and analysis, evaluating the state budget performance of central agencies"
          imageUrl={olzhasImage}
       
       /></div>


      </div>
    </section>
  );
};

export default People;

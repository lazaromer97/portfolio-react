/* eslint-disable react/prop-types */
import "./ExperienceCard.css";
import Technology from "../technology/Technology";
import KeyExperience from "../keyExperience/KeyExperience";

export default function ExperienceCard(props) {
  return (
    <div className="card-experience">
      <div className="title-experience">
        <img
          className="logo-experience"
          src={props.companyLogo}
          alt={props.company}
        />
        <div className="info-experience">
          <h3 className="role-experience">{props.role}</h3>
          <h4 className="company-experience">{props.company}</h4>
          <em className="location-experience">{props.companyLocation}</em>
          <em className="date-experience">{props.date}</em>
        </div>
      </div>
      <div className="body-experience">
        <p>{props.description}</p>
        <ul>
          <li>
            <h5>Technologies</h5>
            {props.technologies.map((tech, i) => {
              return <Technology key={i} name={tech} />;
            })}
          </li>
          <li>
            <h5>Key Experiences</h5>
            {props.keyExperiences.map((experience, i) => {
              return <KeyExperience key={i} name={experience} />;
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}

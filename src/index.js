import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";


function Hi() {
  return (
    <div>
      <div className="d1">
      <div><h1>SEYD ADIL AHMED</h1></div>
      <div><img className="p1" src="https://avatars.githubusercontent.com/u/101401945?v=4"></img></div>
      </div>

      <h2>Summary</h2>
      <p>
        To serve in a reputed organization to utilize my skills, offering
        excellent working atmosphere, bright prospects for earning, growth and
        advancement to a person with high professional commitments. Where I can
        prove myself as energetic and work for the benefit, prosperity and
        development of my organization.
      </p>

      <h2>Personal Info</h2>
      <ul>
        <li>Father Name : Syed Sohail Ahmed</li>
        <li>Date of Birth : 03-May-2003</li>
        <li>C.N.I.C # : 42101-8784736-1</li>
        <li>Religion : Islam</li>
        <li>Nationality : Pakistani</li>
        <li>Marital Status : Single</li>
        <li> Languages : English, Urdu</li>
      </ul>

      <h2>Education</h2>
      <ul>
        <li>
          Intermediate in Pre-Engineering from Board of{" "}
          <b>Intermediate Education Karachi.</b>
        </li>
        <li>
          Matriculation in Science from Board of{" "}
          <b>Secondary Education Karachi.</b>
        </li>
      </ul>

      <h2>Experience</h2>
      <ul>
        <li>
          <b>Currently Working In J.S Bank</b>
        </li>
      </ul>

      <h2>Reference</h2>
      <ul>
        <li>Will be furnished upon your request.</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));

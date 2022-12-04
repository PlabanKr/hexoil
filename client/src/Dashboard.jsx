import { useState } from "react";
import Profile from "./Profile";
import LandInfo from "./LandInfo";
import SubmitData from "./SubmitData";
import Conference from "./Conference";
import AboutUs from "./AboutUs";
import { FaUserCircle } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiOutlineSelect } from "react-icons/ai";
import logo from "./assets/logo.png";
import "./Dashboard.css";

const SECTION = {
  profile: "profile",
  land: "land-info",
  submit: "submit-data",
  conference: "conference",
  about: "about-us",
};

function Dashboard({ walletState }) {
  const [section, setSection] = useState(SECTION.profile);

  const renderSections = (sectionName) => {
    switch (sectionName) {
      case SECTION.profile:
        return (
          <>
            <Profile walletState={walletState} />
          </>
        );

      case SECTION.land:
        return (
          <>
            <LandInfo walletState={walletState} />
          </>
        );

      case SECTION.submit:
        return (
          <>
            <SubmitData walletState={walletState} />
          </>
        );

      case SECTION.conference:
        return (
          <>
            <Conference />
          </>
        );

      case SECTION.about:
        return (
          <>
            <AboutUs walletState={walletState} />
          </>
        );
    }
  };

  return (
    <div className="dash">
      <nav className="dash-nav">
        <img src={logo} alt="Logo" />
      </nav>
      <main className="dash-main">
        <section className="side-menu">
          <div onClick={() => setSection(SECTION.profile)}>
            {" "}
            <FaUserCircle /> Profile
          </div>
          <div onClick={() => setSection(SECTION.land)}>
            {" "}
            <HiLocationMarker /> Land info
          </div>
          <div onClick={() => setSection(SECTION.submit)}>
            {" "}
            <AiOutlineSelect /> Submit Data
          </div>
          <div onClick={() => setSection(SECTION.conference)}>
            {" "}
            <BsCameraVideoFill /> Conference
          </div>
          <div onClick={() => setSection(SECTION.about)}>
            {" "}
            <BsFillInfoCircleFill /> About
          </div>
        </section>
        <section>{renderSections(section)}</section>
      </main>
    </div>
  );
}

export default Dashboard;

import logo from "./assets/logo.png";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-bg">
      <main className="landing-main">
        <section>
          <img src={logo} alt="Logo" />
        </section>
        <section className="world-coin-container"></section>
      </main>
    </div>
  );
}

export default LandingPage;

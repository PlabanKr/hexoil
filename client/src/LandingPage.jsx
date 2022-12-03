import { WorldIDWidget } from "@worldcoin/id";
import logo from "./assets/logo.png";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-bg">
      <main className="landing-main">
        <section>
          <img src={logo} alt="Logo" />
        </section>
        <section className="world-coin-container">
          <WorldIDWidget
            // actionId="wid_staging_4f30f07cabc4d7a66dc6517289c658cf"
            actionId="wid_staging_4f30f07cabc4d7a66dc6517289c658cf"
            signal="test_signal_01"
            enableTelemetry
            onSuccess={(verificationResponse) => console.log(verificationResponse)}
            onError={(error) => console.log(error)}
            debug={true}
          />
        </section>
      </main>
    </div>
  );
}

export default LandingPage;

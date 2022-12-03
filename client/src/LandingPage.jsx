import { WorldIDWidget } from "@worldcoin/id";
import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import "./LandingPage.css";

function LandingPage() {
  const [verified, setVerified] = useState(false);
  const handleVerification = async (verificationResponse) => {
    const options = {
      action_id: "wid_90c20f9fcea5018032f8960046ac8285",
      signal: "test_signal_01",
      proof: verificationResponse.proof,
      nullifier_hash: verificationResponse.nullifier_hash,
      merkle_root: verificationResponse.merkle_root,
    };

    const res = await fetch("https://developer.worldcoin.org/api/v1/verify", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(options),
    });

    const x = await res.json();
    console.log("Worldcoin response", x);

    console.log("Verified!");
    setVerified(true);
  };

  return (
    <div className="landing-bg">
      <main className="landing-main">
        <section>
          <img src={logo} alt="Logo" />
        </section>
        <section className="world-coin-container">
          <WorldIDWidget
            actionId="wid_90c20f9fcea5018032f8960046ac8285"
            signal="test_signal_01"
            enableTelemetry
            onSuccess={(verificationResponse) => {
              handleVerification(verificationResponse);
            }}
            onError={(error) => console.log(error)}
            debug={true}
          />
        </section>
      </main>
    </div>
  );
}

export default LandingPage;

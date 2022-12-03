import { WorldIDWidget } from "@worldcoin/id";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import ABI from "../contracts/OilExploration_ABI.json";
import ContractArtifact from "../contracts/OilExploration.json";
import logo from "./assets/logo.png";
import "./LandingPage.css";

function LandingPage({ setWalletState }) {
  // World coin states
  const [verified, setVerified] = useState(false);
  // Ethers and Meta Mask states
  const [selectedWalletAddress, setSelectedWalletAddress] = useState("");
  const [contract, setContract] = useState(null);

  const navigate = useNavigate();

  // World coin verification
  const handleVerification = async (verificationResponse) => {
    const options = {
      action_id: "wid_90c20f9fcea5018032f8960046ac8285",
      signal: "test_signal_01",
      proof: verificationResponse.proof,
      nullifier_hash: verificationResponse.nullifier_hash,
      merkle_root: verificationResponse.merkle_root,
    };

    // world coin post req
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

  // Handle Meta mask connection button click
  const CONTRACT_ADDRESS = ContractArtifact.networks["5777"].address;

  const handleMetaBtn = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          const _selWaAddress = result[0];
          setSelectedWalletAddress(_selWaAddress);
          const _provider = new ethers.providers.Web3Provider(window.ethereum);
          const _signer = _provider.getSigner();
          const _contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, _signer);
          setContract(_contract);

          setWalletState({
            selectedWalletAddress: _selWaAddress,
            contract: _contract,
          });
        })
        .then(() => {
          navigate("/dashboard");
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  return (
    <div className="landing-bg">
      <main className="landing-main">
        <section>
          <img src={logo} alt="Logo" />
        </section>
        <section className="world-coin-container">
          {verified ? (
            <WorldIDWidget
              actionId="wid_90c20f9fcea5018032f8960046ac8285"
              signal="test_signal_01"
              enableTelemetry
              onSuccess={(verificationResponse) => {
                handleVerification(verificationResponse);
              }}
              onError={(error) => {
                console.log(error);
                if (error.code == "already_signed") {
                  setVerified(true);
                }
              }}
              debug={true}
            />
          ) : (
            <button id="meta-btn" onClick={handleMetaBtn}>
              Connect to Meta Mask
            </button>
          )}
        </section>
      </main>
    </div>
  );
}

export default LandingPage;

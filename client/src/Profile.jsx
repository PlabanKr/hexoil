import "./Profile.css";

function Profile({ walletState }) {
  return (
    <>
      <h1 className="wallet-address-header">Your Wallet Address</h1>
      <p className="wallet-address">{walletState.selectedWalletAddress}</p>
    </>
  );
}

export default Profile;

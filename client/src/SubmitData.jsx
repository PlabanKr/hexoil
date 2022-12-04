import { useState } from "react";
import "./SubmitData.css";

function SubmitData({ walletState }) {
  // All the inpute states
  const [inputData, setInputData] = useState({});

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(walletState);
    console.log(walletState.contract);
    await walletState.contract.GetAddress(walletState.selectedWalletAddress);
    await walletState.contract.Addlocation(inputData.excavationAddress);
    await walletState.contract.PutTemperature(inputData.measuredTemp);
    await walletState.contract.AddFixedTemp(inputData.fixedTemp);
    await walletState.contract.SetGravityMeasure(inputData.g_d);
    await walletState.contract.SetMagneticMeasure(inputData.emf, inputData.emfr);
    await walletState.contract.SetElectricalMeasure(
      inputData.conductivity,
      inputData.em
    );
    await walletState.contract.SetRadioactiveMeasure(inputData.rad);
    await walletState.contract.SetDepthMeasure(inputData.depth);
    await walletState.contract.SetPermialbilityMeasure(inputData.kh, inputData.kv);
    await walletState.contract.SetCoreProsityMeasure(inputData.cpor);
    await walletState.contract.SetCoreOilSaturation(inputData.cso);
    await walletState.contract.SetCoreWaterSaturation(inputData.csw);
    await walletState.contract.SetGrainDemsity(inputData.rhog);
  };

  return (
    <>
      <h1 className="submit-data-header">Submit Data to Blockchain</h1>
      <form className="form-group" onSubmit={handleFormSubmit}>
        <div className="data-container">
          <span className="inp-span">Excavation Address: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, excavationAddress: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Measured Temperature: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, measuredTemp: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Fixed Temperature: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, fixedTemp: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Land Gravity Density: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, g_d: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Electro Magnetivity of Land: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, emf: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Electro Magnetivity of Rock: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, emfr: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Conductivity of Land: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, conductivity: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Electric Conductivity of Rock: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, em: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Radioactivity of Land: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, rad: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Well Depth: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, depth: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Horizontal Permeability to Air: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, kh: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Vertical Permeability to Air: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, kv: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Core Porosity: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, cpor: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Core Oil Saturation: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, cso: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Core Water Saturation: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, csw: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Grain Density: </span>
          <input
            type="text"
            className="label-inp"
            onChange={(event) => {
              setInputData({ ...inputData, rhog: event.target.value });
            }}
          ></input>
        </div>
        <div className="data-container">
          <button>Save Data</button>
        </div>
      </form>
    </>
  );
}

export default SubmitData;

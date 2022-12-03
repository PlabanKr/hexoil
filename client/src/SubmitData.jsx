import "./SubmitData.css";

function SubmitData() {
  return (
    <>
      <h1 className="submit-data-header">Submit Data to Blockchain</h1>
      <form className="form-group">
        <div className="data-container">
          <span className="inp-span">Excavation Address: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Date: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Local Temperature: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Measured Temperature: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Fixed Temperature: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Land Gravity Density: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Electro Magnetivity of Land: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Electro Magnetivity of Rock: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Conductivity of Land: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Electric Conductivity of Rock: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Well Depth: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Horizontal Permeability to Air: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Vertical Permeability to Air: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Core Porosity: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Core Oil Saturation: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Core Water Saturation: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <span className="inp-span">Grain Density: </span>
          <input type="text" className="label-inp"></input>
        </div>
        <div className="data-container">
          <button>Save Data</button>
        </div>
      </form>
    </>
  );
}

export default SubmitData;

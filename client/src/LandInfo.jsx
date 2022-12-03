import "./LandInfo.css";

function LandInfo() {
  return (
    <>
      <h1 className="land-info-header">Land Info</h1>
      <section className="land-properties">
        <div className="data-container">
          <span className="label-span">Excavation Address: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Date: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Local Temperature: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Measured Temperature: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Fixed Temperature: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Land Gravity Density: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Electro Magnetivity of Land: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Electro Magnetivity of Rock: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Conductivity of Land: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Electric Conductivity of Rock: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Well Depth: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Horizontal Permeability to Air: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Vertical Permeability to Air: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Core Porosity: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Core Oil Saturation: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Core Water Saturation: </span>
          <span className="label-val"></span>
        </div>
        <div className="data-container">
          <span className="label-span">Grain Density: </span>
          <span className="label-val"></span>
        </div>
      </section>
    </>
  );
}

export default LandInfo;

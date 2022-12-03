//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.6;

contract OilExploration {
    address MyAddress; // wallet address
    string Location; // excavation area location
    uint256 Date; // land inspect date
    uint256 Temperature; // land temp at that time
    uint256 MeasureTemp; // measured temp at that time
    uint256 FixedTemp; // fixed temp for work
    uint256 G_D; // land gravity density
    uint256 EMF; // land electro magnetic param (earth main)
    uint256 EMFR; // land electro magnectic rock param
    uint256 Conductivity; // land conductivity param
    uint256 EM; // electric conductivity of rock
    uint256 Rad; // radioactivity of land
    uint256 Depth; // well depth
    uint256 KH; // horizontal permeability to air
    uint256 KV; // veritcal permeability to air
    uint256 CPOR; // core porosity
    uint256 CSO; // core oil saturation
    uint256 CSW; // core water saturation
    uint256 RHOG; // grain density

    enum TempStage {
        Normal,
        High,
        Low
    }
    TempStage public TempValue;

    constructor() {
        MyAddress == msg.sender;
        Date = block.timestamp;
    }

    function GetLocation() public view returns (string memory) {
        return Location;
    }

    function Addlocation(string memory Land_location) public payable {
        Location = Land_location;
    }

    function getGravityMeasure() public view returns (uint256) {
        return G_D;
    }

    function SetGravityMeasure(uint256 Gravity_density) public payable {
        G_D = Gravity_density;
    }

    function GetMagneticMeasure() public view returns (uint256) {
        return EMF;
    }

    function SetMagneticMeasure(uint256 Earth_Main_MF, uint256 Rocks_MF)
        public
        payable
    {
        EMF = Earth_Main_MF;
        EMFR = Rocks_MF;
    }

    function PutTemperature(uint256 TValue) public payable {
        MeasureTemp = TValue;
    }

    function AddFixedTemp(uint256 F_Temp) public payable {
        FixedTemp = F_Temp;
    }

    function CheckTemperature() public view returns (string memory) {
        if (MeasureTemp > FixedTemp) {
            return "TEMPERATURE IS HIGH";
        } else if (MeasureTemp < FixedTemp) {
            return "TEMPERATURE IS LOW";
        } else {
            return "TEMPERATURE IS ACCURATE";
        }
    }

    function GetElectricalMeasure() public view returns (uint256) {
        return Conductivity;
    }

    function SetElectricalMeasure(
        uint256 Electrical_conductivity_of_Rock,
        uint256 Electromagnetic_of_mettalic_body
    ) public payable {
        Conductivity = Electrical_conductivity_of_Rock;
        EM = Electromagnetic_of_mettalic_body;
    }

    function GetRadioactiveMeasure() public view returns (uint256) {
        return Rad;
    }

    function SetRadioactiveMeasure(uint256 Radioactive) public payable {
        Rad = Radioactive;
    }

    function GetDepthMeasure() public view returns (uint256) {
        return Depth;
    }

    function SetDepthMeasure(uint256 DepthMeasurement) public {
        Depth = DepthMeasurement;
    }

    function GetPermialbilityMeasure() public view returns (uint256) {
        return KH;
    }

    function SetPermialbilityMeasure(
        uint256 Horizontal_Permeability_Air,
        uint256 Vertical_permiablity_Air
    ) public {
        KH = Horizontal_Permeability_Air;
        KV = Vertical_permiablity_Air;
    }

    function GetCoreProsityMeasure() public view returns (uint256) {
        return CPOR;
    }

    function SetCoreProsityMeasure(uint256 Core_porosity) public {
        CPOR = Core_porosity;
    }

    function GetCoreOilSaturation() public view returns (uint256) {
        return CSO;
    }

    function SetCoreOilSaturation(uint256 core_Oil_Saturation) public {
        CSO = core_Oil_Saturation;
    }

    function GetCoreWaterSaturation() public view returns (uint256) {
        return CSW;
    }

    function SetCoreWaterSaturation(uint256 core_water_Saturation) public {
        CSW = core_water_Saturation;
    }

    function GetGrainDemsity() public view returns (uint256) {
        return RHOG;
    }

    function SetGrainDemsity(uint256 Grain_density) public {
        RHOG = Grain_density;
    }

    function CheckDepth() public view returns (string memory) {
        if (Depth > 30000) {
            return "Cannaot dig anymore";
        } else if (Depth < 30000) {
            return "proceed";
        }
    }
}

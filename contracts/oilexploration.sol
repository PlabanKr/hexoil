//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract OilExploration {
    // address MyAddress;
    string Location;
    uint256 Date;
    //uint Temperature;
    uint256 MeasureTemp;
    uint256 FixedTemp;
    uint256 G_D;
    uint256 EMF;
    uint256 EMFR;
    uint256 Conductivity;
    uint256 EM;
    uint256 Rad;
    uint256 Depth;
    uint256 KH;
    uint256 KV;
    uint256 CPOR;
    uint256 CSO;
    uint256 CSW;
    uint256 RHOG;
    uint256 Nullifierhash;

    enum TempStage {
        Normal,
        High,
        Low
    }
    TempStage public TempValue;

    constructor() {
        // MyAddress==msg.sender;
        Date = block.timestamp;
    }

    // function GetAddress(address _address) public payable
    // {
    //     MyAddress=_address;
    // }
    // function GetAddressBalance() public view returns (uint) {
    //     return MyAddress.balance;
    // }

    function GetNullifierhash() public view returns (uint256) {
        return Nullifierhash;
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
        return EMFR;
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
        return EM;
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
        return KV;
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

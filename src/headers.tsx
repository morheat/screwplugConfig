import React from "react";

interface headerProps {
  serialNum: string;
  title: string;
  material: string;
  voltage: string;
  wattage: string;
  thermostat: string;
}

const Header: React.FC<headerProps> = ({
  serialNum,
  title,
  material,
  voltage,
  wattage,
  thermostat,
}) => {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(today);
  console.log(thermostat);
  return (
    <div className="absolute text-black flex">
      <div className="absolute w-[9.5rem] mt-[210px] ml-[112px] flex justify-center items-center translate-x-[-50%] text-center">
        {serialNum}
      </div>
      <div className="absolute h-16 w-[18rem] mt-[270px] ml-[331.5px] flex justify-center translate-x-[-50%] text-center text-xl font-bold">
        {title}
      </div>
      <div className="absolute h-16 w-[18rem] mt-[295px] ml-[112px] flex justify-center translate-x-[-50%] text-center text-xl ">
        {material}
      </div>
      <div className="absolute h-16 w-[18rem] mt-[265px] ml-[112px] flex justify-center translate-x-[-50%] text-center">
        {formattedDate}
      </div>
      <div className="absolute w-[18rem] mt-[254px] ml-[-420px] ">
        {thermostat !== "" && (
          <div className="">Using {" " + thermostat + " "} thermostat</div>
        )}
        <div>
          {voltage}
          {" V"}
        </div>
        <div>
          {wattage}
          {" W"}
        </div>
      </div>
    </div>
  );
};

export default Header;

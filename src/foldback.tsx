import React from "react";
import { ReactComponent as FHead } from "./assets/Heating-Element-foldBack-head.svg";
import { ReactComponent as BfHead } from "./assets/Heating-Element-foldBack-fhead.svg";

interface foldbackProps {
  length: number;
  foldLength: number;
  scaleFactor: number;
}

const Foldback: React.FC<foldbackProps> = ({
  length,
  foldLength,
  scaleFactor,
}) => {
  return (
    <div className="flex items-center mt-[-9px]" style={{ width: length + 16 }}>
      <div
        className="absolute border-y-[1px] border-y-black mt-[32px]"
        style={{ width: length, height: 8 }}
      />

      <div
        className=" absolute border-t-[1px] border-t-black mt-[0px]"
        style={{ width: length - foldLength - 14, height: 8 }}
      />
      <div
        className=" absolute border-b-[1px] border-b-black mt-[0px]"
        style={{ width: length - foldLength, height: 8 }}
      />
      {foldLength > 0 && (
        <>
          <BfHead
            className="absolute"
            height="24px"
            style={{
              marginTop: -16,
              marginLeft: length - foldLength - 15,
              zIndex: 2,
            }}
          />
          <div
            className="absolute"
            style={{
              width: foldLength,
              marginLeft: length - foldLength,
              zIndex: 2,
            }}
          >
            <div
              className="absolute border-y-[1px] border-y-black mt-[-20px]"
              style={{ width: foldLength, height: 8 }}
            />
            <div
              className="absolute border-y-[1px] border-y-black mt-[-4px]"
              style={{ width: foldLength, height: 8, background: "white" }}
            />
          </div>
        </>
      )}

      <FHead
        className="absolute"
        height="40px"
        style={{ marginLeft: length, zIndex: 2 }}
      />

      {/**********************************************/}
      {/**********************************************/}
      {/* Fold Dimension */}
      {/**********************************************/}
      {/**********************************************/}
      {foldLength > 0 && (
        <div
          className="border-x-2 border-black flex items-end justify-end"
          style={{
            width: `${foldLength + 32}px`,
            marginLeft: `${length - foldLength - 16}px`,
            height: `${12 / scaleFactor}rem`,
            borderLeftWidth: `${1 / scaleFactor}px`,
            borderRightWidth: `${1 / scaleFactor}px`,
            marginBottom: `${14 / scaleFactor}rem`,
          }}
        >
          {/* Arrows */}
          <div
            className="absolute w-0 h-0 border-t-[0.5rem] border-b-[0.5rem] border-r-[2rem] border-t-transparent border-b-transparent border-r-black "
            style={{
              marginRight: `${foldLength - 1}px`,
              marginBottom: `${9.5 / scaleFactor}rem`,
            }}
          />
          <div
            className="absolute w-0 h-0 border-t-[0.5rem] border-b-[0.5rem] border-l-[2rem] border-t-transparent border-b-transparent border-l-black"
            style={{ marginBottom: `${9.5 / scaleFactor}rem` }}
          />

          <div
            className="absolute text-black"
            style={{
              marginBottom: `${9.8 / scaleFactor}rem`,
              marginRight: `${(foldLength + 30) / 2}px`,
              transform: "translate(50%,0%)",
              fontSize: `${1 / scaleFactor}rem`,
            }}
          >
            {Number(((foldLength + 15) / 42).toFixed(3))}&quot;
          </div>
          <div
            className="absolute text-black"
            style={{
              marginBottom: `${8.8 / scaleFactor}rem`,
              marginRight: `${(foldLength + 30) / 2}px`,
              transform: "translate(50%,0%)",
              fontSize: `${0.6 / scaleFactor}rem`,
            }}
          >
            Fold Length
          </div>
          <div
            className="absolute border-t-[1px] border-black"
            style={{
              marginBottom: `${9.5 / scaleFactor + 0.4}rem`,
              width: `${foldLength + 15}px`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Foldback;

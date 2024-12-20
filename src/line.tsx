import React from "react";

interface dynamicShapeProps {
  length: number;
}

const dynamicShape: React.FC<dynamicShapeProps> = ({ length }) => {
  return (
    <div className="absolute h-1 mt-[0.8px]">
      {length > 7 && (
        <div
          className="absolute h-1 border-b-[0.7px] border-black"
          style={{
            marginLeft: `${20 - length * 3}px`,
            width: `${length * 3 - 20}px`,
          }}
        ></div>
      )}
    </div>
  );
};

export default dynamicShape;

import React from "react";
import DynamicShape from "./line";
import Header from "./headers";
import Foldback from "./foldback";
import { ReactComponent as Nema1F } from "./assets/SheetBase-Front.svg";
import { ReactComponent as Nema1LF } from "./assets/SheetBase-Large-Front.svg";
import { ReactComponent as Nema1LFT } from "./assets/SheetBase-Large-Front-tc.svg";
import { ReactComponent as NemaFF } from "./assets/Nema-flipBox-Front.svg";
import { ReactComponent as Nema7F } from "./assets/Nema-7-fRONT.svg";
import { ReactComponent as NemaLF } from "./assets/Nema-Large-fRONT.svg";
import { ReactComponent as Nema1 } from "./assets/SheetBase.svg";
import { ReactComponent as Nema1Long } from "./assets/SheetBase-Long.svg";
import { ReactComponent as Nema1Large } from "./assets/SheetBase-Large.svg";
import { ReactComponent as NemaF } from "./assets/Nema-flipBox.svg";
import { ReactComponent as Nema7 } from "./assets/nemsev.svg";
import { ReactComponent as Nema4x } from "./assets/Nema-Large.svg";
import { ReactComponent as Thread } from "./assets/Thread.svg";
import { ReactComponent as HeatingElement1 } from "./assets/heating-1Element.svg";
import { ReactComponent as HeatingElement1H } from "./assets/heating-1Element-head.svg";
import { ReactComponent as HeatingElement2 } from "./assets/heating-2Element.svg";
import { ReactComponent as HeatingElement2H } from "./assets/heating-2Element-head.svg";
import { ReactComponent as HeatingElement2L } from "./assets/heating-2Element-Large.svg";
import { ReactComponent as HeatingElement2LH } from "./assets/heating-2Element-head-L.svg";
import { ReactComponent as HeatingElement3 } from "./assets/heating-3SElementt.svg";
import { ReactComponent as HeatingElement3H1 } from "./assets/heating-3SElement-head1.svg";
import { ReactComponent as HeatingElement3H2 } from "./assets/heating-3SElement-head2.svg";
import { ReactComponent as HeatingElement3L } from "./assets/heating-3LElement.svg";
import { ReactComponent as HeatingElement3LH } from "./assets/heating-3LElement-head.svg";
import { ReactComponent as HeatingElement6 } from "./assets/heating-6Element.svg";
import { ReactComponent as HeatingElement6Head } from "./assets/heating-6Element-head.svg";
import { ReactComponent as Thermostat } from "./assets/thermostat.svg";
import { ReactComponent as Titlebox } from "./assets/TITLE.svg";
import { ReactComponent as LOGO } from "./assets/LOGO.svg";

interface drawingProps {
  serialNum: string;
  title: string;
  plugSize: number;
  lengthElement: number;
  foldLength: number;
  elementNum: number;
  terminalBox: string;
  processTemp: string;
  hlSensor: string;
  typeThermostat: string;
  thermoLength: number;
  material: string;
  voltage: string;
  wattage: string;
}

const drawing: React.FC<drawingProps> = ({
  serialNum,
  title,
  plugSize,
  lengthElement,
  foldLength,
  elementNum,
  terminalBox,
  processTemp,
  hlSensor,
  typeThermostat,
  thermoLength,
  material,
  voltage,
  wattage,
}) => {
  const element3margin = 9.8;

  let marginBox = -71;
  if (terminalBox === "N1" && plugSize >= 2) {
    marginBox = -90;
  } else if (terminalBox === "N1" && processTemp !== "nT") {
    marginBox = -123;
  } else if (terminalBox === "N4") {
    marginBox = -55;
  } else if (terminalBox === "N47") {
    marginBox = -55;
  } else if (terminalBox === "N4X") {
    marginBox = -90;
  }
  const scaleFactor =
    800 /
    (315 +
      lengthElement * 60 +
      plugSize * 60 +
      (processTemp !== "nT" && terminalBox !== "N1" ? plugSize * 38 : 0) -
      marginBox);
  return (
    <div className="w-[1000px] h-[772.73px] flex items-center justify-center bg-white border-2 border-slate-400 rounded-lg">
      <Header
        serialNum={serialNum}
        title={title}
        material={material}
        voltage={voltage}
        wattage={wattage}
        thermostat={typeThermostat}
      />
      <div className="absolute w-[950px] flex items-center justify-center">
        <Titlebox className="absolute" />
        <LOGO className="absolute w-[16rem] ml-[650px] mt-[460px]" />
      </div>
      <div className="h-full flex-grow flex items-center justify-center">
        <div
          style={{
            transform: `scale(${scaleFactor}) translate(0%, 0%)`,
          }}
        >
          {terminalBox === "N1" && plugSize < 2 && (
            <div className="" style={{ width: 164.5, marginRight: "-10px" }}>
              <Nema1F />
            </div>
          )}
          {terminalBox === "N1" && processTemp === "nT" && plugSize >= 2 && (
            <div className="" style={{ width: 164.5, marginRight: "-10px" }}>
              <Nema1LF />
            </div>
          )}
          {terminalBox === "N1" && processTemp !== "nT" && plugSize >= 2 && (
            <div className="" style={{ width: 164.5, marginRight: "-10px" }}>
              <Nema1LFT />
            </div>
          )}
          {terminalBox === "N4" && (
            <div
              className=""
              style={{
                width: 198.03,
                marginRight: "-10px",
                marginTop: "20px",
              }}
            >
              <NemaFF />
            </div>
          )}
          {terminalBox === "N47" && (
            <div className="" style={{ width: 134, marginRight: "-10px" }}>
              <Nema7F />
            </div>
          )}
          {terminalBox === "N4X" && (
            <div
              className=""
              style={{
                width: 236.66,
                marginRight: `-${100}px`,
                marginLeft: `${lengthElement < 4 ? -20 : 0 - 70}px`,
              }}
            >
              <NemaLF />
            </div>
          )}
        </div>
      </div>

      <div className="h-full flex flex-grow-[3] items-center justify-center">
        <div
          className="absolute flex items-center pl-[5.6rem] "
          style={{
            marginLeft:
              -20 +
              (terminalBox === "N1" && processTemp !== "nT" && plugSize >= 2
                ? -60
                : 0),
            transform: `scale(${scaleFactor}) translate(0%, 0%)`,
          }}
        >
          {/* Thermostat (Only for Nema 1 I believe) */}
          {terminalBox === "N1" && processTemp !== "nT" && plugSize >= 2 && (
            <div>
              <Thermostat
                style={{
                  height: 75,
                  transform: "translate(-100%, 0%)",
                  marginRight: 42,
                  marginTop: -85,
                }}
              />
            </div>
          )}
          {/* Terminal Box */}
          {terminalBox === "N1" && processTemp === "nT" && plugSize < 2 && (
            <>
              <Nema1
                style={{
                  height: "164.5px",
                  transform: `translate(-50%, 0%)`,
                }}
              />
            </>
          )}
          {terminalBox === "N1" && processTemp !== "nT" && plugSize < 2 && (
            <>
              <Nema1Long
                style={{
                  height: "164.5px",
                  transform: `translate(-50%, 0%)`,
                }}
              />
            </>
          )}
          {terminalBox === "N1" && plugSize >= 2 && (
            <>
              <Nema1Large
                style={{
                  height: "185px",
                  transform: `translate(-50%, 0%)`,
                }}
              />
            </>
          )}
          {terminalBox === "N4" && (
            <>
              <NemaF
                style={{
                  marginTop: "20px",
                  width: 110,
                  transform: `translate(-50%, 0%)`,
                }}
              />
            </>
          )}
          {terminalBox === "N47" && (
            <>
              <Nema7
                style={{
                  width: 110,
                  transform: `translate(-50%, 0%)`,
                }}
              />
            </>
          )}
          {terminalBox === "N4X" && (
            <>
              <Nema4x
                style={{
                  width: "180px",
                  transform: `translate(-50%, 0%)`,
                }}
              />
            </>
          )}
          {/* Standoff */}
          {processTemp !== "nT" && terminalBox !== "N1" && (
            <div
              className="border-y-[1px] border-black"
              style={{
                width: plugSize * 38,
                height: plugSize * 48,
                marginLeft: marginBox,
              }}
            />
          )}
          {/* thread */}
          <Thread
            width={plugSize * 41}
            style={{
              marginLeft:
                Number(processTemp === "nT" || terminalBox === "N1") *
                marginBox,
              transform: `translate(0%, 0%)`,
            }}
          />
          {/**********************************/}
          {/**********************************/}
          {/*Thread Leader*/}
          {/**********************************/}
          {/**********************************/}
          <div
            className="border-b-[1.2rem] border-r-[0.3rem] border-l-[0.3rem] border-r-transparent border-l-transparent border-b-black"
            style={{
              marginLeft: -9,
              transform: `translate(-4px,${plugSize * 22 + 9}px) rotate(10deg)`,
            }}
          >
            <div
              className="absolute"
              style={{
                height: 100 / scaleFactor,
                borderLeft: `${1 / scaleFactor}px solid black`,
              }}
            />
            <div
              className="absolute text-black"
              style={{
                marginLeft: -40 / scaleFactor,
                width: 150 / scaleFactor,
                marginTop: 90 / scaleFactor,
                transform: "rotate(-10deg)",
                fontSize: `${1 / scaleFactor}rem`,
              }}
            >
              {plugSize}&quot; NPT -{" "}
              {(plugSize === 1 ||
                plugSize === 1.25 ||
                plugSize === 1.5 ||
                plugSize === 2) && <>11.5</>}
              {(plugSize === 2.5 || plugSize === 3 || plugSize === 4) && <>8</>}
            </div>
          </div>
          {/***************************************/}
          {/***************************************/}
          {/* Elements */}
          {/***************************************/}
          {/***************************************/}
          {elementNum === 1 && (
            <div className="flex items-center">
              <HeatingElement1 width={`${lengthElement * 42}px`} height="40" />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[16px] bg-cyan-400 border-r-[1px] border-y-[1px] border-black mt-[0px]"
                  style={{ width: `${thermoLength * 42}px` }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[37px]"
                  style={{ width: `${lengthElement * 38}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 1.5 && (
            <div className="flex items-center">
              <Foldback
                length={lengthElement * 42}
                foldLength={foldLength * 42 - 15}
                scaleFactor={scaleFactor}
              />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[16px] bg-cyan-400 border-r-[1px] border-y-[1px] border-black"
                  style={{ width: `${thermoLength * 42}px`, zIndex: 1 }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[28px]"
                  style={{ width: `${lengthElement * 38}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 2 && (
            <div className="flex items-center">
              <HeatingElement2
                height={"50"}
                width={`${lengthElement * 42}px`}
              />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[8px] bg-cyan-400 border-r-[1px] border-b-[1px] border-black mt-[6.5px]"
                  style={{ width: `${thermoLength * 42}px` }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[47px]"
                  style={{ width: `${lengthElement * 38}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 3 && (
            <div className="flex items-center">
              <HeatingElement3
                height={"50"}
                width={`${lengthElement * 42}px`}
              />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[2.7px] bg-cyan-400 border-r-[1px] border-black"
                  style={{ width: `${thermoLength * 42}px` }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[47px]"
                  style={{ width: `${lengthElement * 38}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 2.475 && (
            <div className="flex items-center">
              <HeatingElement2L
                height={"75px"}
                width={`${lengthElement * 42}px`}
              />
              {processTemp !== "nT" && (
                <div
                  className="absolute h-[16px] bg-cyan-400 border-r-[1px] border-y-[1px] border-black"
                  style={{ width: `${thermoLength * 42}px` }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[72px]"
                  style={{ width: `${lengthElement * 38}px` }}
                />
              )}
            </div>
          )}
          {elementNum === 3.475 && (
            <div className="flex items-center">
              <HeatingElement3L
                height={`${plugSize * 40}`}
                width={`${lengthElement * 42}px`}
                style={{ marginLeft: `${0}px` }}
              />
              {processTemp !== "nT" && (
                <div
                  className="absolute bg-cyan-400 border-r-[1px] border-black"
                  style={{
                    width: `${thermoLength * 42}px`,
                    height: `${plugSize * 3}px`,
                  }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[77px]"
                  style={{
                    width: `${lengthElement * 38}px`,
                    marginTop: `${plugSize * 40 - 4}px`,
                  }}
                />
              )}
            </div>
          )}
          {elementNum === 6.475 && (
            <div className="flex items-center">
              <HeatingElement6
                height={`${plugSize * 40}`}
                width={`${lengthElement * 42}px`}
                style={{ marginLeft: `${0}px` }}
              />
              {processTemp !== "nT" && (
                <div
                  className="absolute bg-cyan-400 border-r-[1px] border-t-[1px] border-black mt-[-13.5px]"
                  style={{
                    width: `${thermoLength * 42}px`,
                    height: `${plugSize * 1.75}px`,
                    marginTop: `${-plugSize * 3.86}px`,
                  }}
                />
              )}
              {hlSensor !== "nHL" && (
                <div
                  className="absolute h-[3px] bg-yellow-300 border-r-[0.5px] border-y-[0.5px] border-black mt-[77px]"
                  style={{
                    width: `${lengthElement * 38}px`,
                    marginTop: `${plugSize * 40 - 4}px`,
                  }}
                />
              )}
            </div>
          )}
          {/* heads */}
          {elementNum === 1 && lengthElement > 0 && (
            <HeatingElement1H
              width={`20.2px`}
              style={{ marginLeft: `${-0.3}px` }}
            />
          )}
          {elementNum === 2 && lengthElement > 0 && (
            <HeatingElement2H
              width={`20.3px`}
              style={{ marginLeft: `${-0.3}px`, marginTop: `${0}px` }}
            />
          )}
          {/* # elements is complicated due to the inner heads */}
          {elementNum === 3 && lengthElement > 0 && (
            <div className="flex items-center">
              <HeatingElement3H1
                width={`20.3px`}
                style={{
                  marginLeft: `${-0.3}px`,
                  marginTop: `${0.3}px`,
                }}
              />
              {lengthElement >= 7 && (
                <HeatingElement3H2
                  width={`20.7px`}
                  style={{
                    position: "absolute",
                    marginLeft: `${-3 * lengthElement}px`,
                    marginTop: `${element3margin}px`,
                  }}
                />
              )}
              {lengthElement < 7 && (
                <HeatingElement3H2
                  width={`20.7px`}
                  style={{
                    position: "absolute",
                    marginLeft: `${-3.8 * lengthElement - 8 / lengthElement}px`,
                    marginTop: `${element3margin}px`,
                  }}
                />
              )}
              <DynamicShape length={lengthElement} />
            </div>
          )}
          {elementNum === 2.475 && lengthElement > 0 && (
            <HeatingElement2LH
              height={`75px`}
              style={{ marginLeft: `${-0.3}px`, marginTop: `${0}px` }}
            />
          )}
          {elementNum === 3.475 && lengthElement > 0 && (
            <HeatingElement3LH
              height={`${plugSize * 40}`}
              style={{ marginLeft: `${-0.3}px` }}
            />
          )}
          {elementNum === 6.475 && lengthElement > 0 && (
            <HeatingElement6Head
              height={`${plugSize * 40}`}
              style={{
                marginLeft: `${-0.3}px`,
              }}
            />
          )}

          {/**********************************/}
          {/**********************************/}
          {/*Immersion Length*/}
          {/**********************************/}
          {/**********************************/}
          {lengthElement > 0 && (
            <div
              className="border-x-2 border-black flex items-end justify-end"
              style={{
                width: `${
                  lengthElement * 42 +
                  20.3 +
                  (plugSize === 2 ? 14 : 0) +
                  (plugSize === 2.5 ? 16 : 0) +
                  (plugSize === 3 ? 31 : 0) +
                  (plugSize === 4 ? 31 : 0) +
                  (plugSize === 4 && elementNum === 3.475 ? 18 : 0) -
                  (elementNum === 1.5 ? 4 : 0)
                }px`,
                marginLeft: `${-(
                  lengthElement * 42 +
                  20.3 +
                  (plugSize === 2 ? 14 : 0) +
                  (plugSize === 2.5 ? 16 : 0) +
                  (plugSize === 3 ? 31 : 0) +
                  (plugSize === 4 ? 31 : 0) +
                  (plugSize === 4 && elementNum === 3.475 ? 18 : 0) -
                  (elementNum === 1.5 ? 4 : 0)
                )}px`,
                height: `${15 / scaleFactor}rem`,
                borderLeftWidth: `${1 / scaleFactor}px`,
                borderRightWidth: `${1 / scaleFactor}px`,
                marginBottom: `${(15 + plugSize * 1.8) / scaleFactor}rem`,
              }}
            >
              {/* Arrows */}
              <div
                className="absolute w-0 h-0 border-t-[0.5rem] border-b-[0.5rem] border-r-[2rem] border-t-transparent border-b-transparent border-r-black "
                style={{
                  marginRight: `${
                    lengthElement * 42 +
                    20.3 -
                    32 +
                    (plugSize === 2 ? 14 : 0) +
                    (plugSize === 2.5 ? 16 : 0) +
                    (plugSize === 3 ? 31 : 0) +
                    (plugSize === 4 ? 31 : 0) +
                    (plugSize === 4 && elementNum === 3.475 ? 18 : 0) -
                    (elementNum === 1.5 ? 4 : 0)
                  }px`,
                  marginBottom: `${13 / scaleFactor}rem`,
                }}
              />
              <div
                className="absolute w-0 h-0 border-t-[0.5rem] border-b-[0.5rem] border-l-[2rem] border-t-transparent border-b-transparent border-l-black"
                style={{ marginBottom: `${13 / scaleFactor}rem` }}
              />
              <div
                className="absolute text-black"
                style={{
                  marginBottom: `${13 / scaleFactor + 0.5}rem`,
                  marginRight: `${
                    (lengthElement * 42 +
                      20.3 +
                      (plugSize === 2 ? 14 : 0) +
                      (plugSize === 2.5 ? 16 : 0) +
                      (plugSize === 3 ? 31 : 0) +
                      (plugSize === 4 ? 31 : 0) +
                      (plugSize === 4 && elementNum === 3.475 ? 18 : 0)) /
                    2
                  }px`,
                  transform: "translate(50%,0%)",
                  fontSize: `${1 / scaleFactor}rem`,
                }}
              >
                {lengthElement}&quot;
              </div>
              <div
                className="absolute text-black"
                style={{
                  marginBottom: `${12.5 / scaleFactor}rem`,
                  marginRight: `${
                    (lengthElement * 42 +
                      20.3 +
                      (plugSize === 2 ? 14 : 0) +
                      (plugSize === 2.5 ? 16 : 0) +
                      (plugSize === 3 ? 31 : 0) +
                      (plugSize === 4 ? 31 : 0) +
                      (plugSize === 4 && elementNum === 3.475 ? 18 : 0)) /
                    2
                  }px`,
                  transform: "translate(50%,0%)",
                  fontSize: `${0.6 / scaleFactor}rem`,
                }}
              >
                Immersion Length
              </div>
              <div
                className="absolute border-t-[1px] border-black"
                style={{
                  marginBottom: `${13 / scaleFactor + 0.5}rem`,
                  width: `${
                    lengthElement * 42 +
                    20.3 +
                    (plugSize === 2 ? 14 : 0) +
                    (plugSize === 2.5 ? 16 : 0) +
                    (plugSize === 3 ? 31 : 0) +
                    (plugSize === 4 ? 31 : 0) +
                    (plugSize === 4 && elementNum === 3.475 ? 18 : 0) -
                    (elementNum === 1.5 ? 4 : 0)
                  }px`,
                }}
              />
            </div>
          )}
          {/*************************************************/}
          {/*************************************************/}
          {/*High Limit*/}
          {/*************************************************/}
          {/*************************************************/}

          {hlSensor !== "nHL" && lengthElement > 0 && (
            <div
              className="border-b-[1.2rem] border-r-[0.3rem] border-l-[0.3rem] border-r-transparent border-l-transparent border-b-black"
              style={{
                marginLeft: -9,
                transform: `translate(${
                  -lengthElement * 4 -
                  (elementNum === 1 ? 28 : 0) -
                  (elementNum === 2 ? 25 : 0) -
                  (elementNum === 3 ? 25 : 0) -
                  (elementNum === 2.475 ? 37 : 0) -
                  (elementNum === 3.475 ? plugSize * 16 : 0) -
                  (elementNum === 6.475 ? plugSize * 16 : 0)
                }px,${
                  11 +
                  (elementNum === 1 ? 20 : 0) +
                  (elementNum === 2 ? 25 : 0) +
                  (elementNum === 3 ? 25 : 0) +
                  (elementNum === 2.475 ? 37 : 0) +
                  (elementNum === 3.475 ? plugSize * 20 : 0) +
                  (elementNum === 6.475 ? plugSize * 20 : 0)
                }px) rotate(10deg)`,
              }}
            >
              <div
                className="absolute"
                style={{
                  height: 80 / scaleFactor,
                  borderLeft: `${1 / scaleFactor}px solid black`,
                }}
              />
              <div
                className="absolute text-black"
                style={{
                  marginLeft: -90 / scaleFactor,
                  width: 200 / scaleFactor,
                  marginTop: 75 / scaleFactor,
                  transform: "rotate(-10deg)",
                  fontSize: `${1 / scaleFactor}rem`,
                }}
              >
                {hlSensor === "HLTC" && <>High-Limit Thermocouple</>}
                {hlSensor === "HLTS" && <>High-Limit Thermostat</>}
              </div>
            </div>
          )}

          {/*************************************************/}
          {/*************************************************/}
          {/*Thermowell Length*/}
          {/*************************************************/}
          {/*************************************************/}

          {processTemp !== "nT" && thermoLength > 0 && (
            <div
              className="border-x-2 border-black flex items-end justify-end"
              style={{
                width: `${thermoLength * 42}px`,
                marginLeft: `${-(
                  lengthElement * 42 +
                  20.3 +
                  (plugSize === 2 ? 14 : 0) +
                  (plugSize === 2.5 ? 16 : 0) +
                  (plugSize === 3 ? 31 : 0) +
                  (plugSize === 4 ? 31 : 0) +
                  (plugSize === 4 && elementNum === 3.475 ? 18 : 0) -
                  (elementNum === 1.5 ? 4 : 0)
                )}px`,
                marginRight: `${(lengthElement - thermoLength) * 42 + 20.3}px`,
                height: `${8 / scaleFactor}rem`,
                borderLeftWidth: `${1 / scaleFactor}px`,
                borderRightWidth: `${1 / scaleFactor}px`,
                marginBottom: `${(8 + plugSize * 1.5) / scaleFactor}rem`,
              }}
            >
              {/* Arrows */}
              <div
                className="absolute w-0 h-0 border-t-[0.5rem] border-b-[0.5rem] border-r-[2rem] border-t-transparent border-b-transparent border-r-black "
                style={{
                  marginRight: `${thermoLength * 42 - 32}px`,
                  marginBottom: `${7 / scaleFactor}rem`,
                }}
              />
              <div
                className="absolute w-0 h-0 border-t-[0.5rem] border-b-[0.5rem] border-l-[2rem] border-t-transparent border-b-transparent border-l-black"
                style={{ marginBottom: `${7 / scaleFactor}rem` }}
              />

              <div
                className="absolute text-black"
                style={{
                  marginBottom: `${7 / scaleFactor + 0.5}rem`,
                  marginRight: `${thermoLength * 21}px`,
                  transform: "translate(50%,0%)",
                  fontSize: `${1 / scaleFactor}rem`,
                }}
              >
                {thermoLength}&quot;
              </div>
              <div
                className="absolute text-black"
                style={{
                  marginBottom: `${6.5 / scaleFactor}rem`,
                  marginRight: `${thermoLength * 21}px`,
                  transform: "translate(50%,0%)",
                  fontSize: `${0.6 / scaleFactor}rem`,
                }}
              >
                Thermowell
              </div>
              <div
                className="absolute border-t-[1px] border-black"
                style={{
                  marginBottom: `${7 / scaleFactor + 0.5}rem`,
                  width: `${thermoLength * 42}px`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default drawing;

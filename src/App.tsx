import { useEffect, useState } from "react";
import Drawing from "./drawing.tsx";

const App = () => {
  const [serialNum, setSerialNum] = useState<string>("");
  const [titleVar, setTitle] = useState<string>("");
  const [voltsVar, setVoltage] = useState<string>("");
  const [wattsVar, setWattage] = useState<string>("");
  const [processSensor, setProcessSensor] = useState<string>("nT");
  const [HLSensor, setHLSensor] = useState<string>("nHL");
  const [processTStat, setProcessTStat] = useState<string>("");
  const [terminalBoxVar, setTerminalBox] = useState<string>("N1");
  const [materialVar, setMaterial] = useState<string>("304SS");

  const [plugSizeOP, setPlugSize] = useState<number>(1);
  const [immersionLengthVar, setImmersionLength] = useState<number>(10);
  const [foldLengthVar, setFoldLength] = useState<number>(5);
  const [thermoLength, setThermoLength] = useState<number>(8);
  const [elementNumVar, setElementNum] = useState<number>(1);

  useEffect(() => {
    //Changes the number of elements when the plug Size changes
    var currentElements = (
      document.getElementById("elementNumOptions") as HTMLSelectElement
    ).value;
    setElementNum(Number(currentElements));
  }, [plugSizeOP]);

  return (
    <div className="flex justify-center mt-5 w-screen">
      <div className="w-96 h-[50rem] bg-white p-2 border-2 border-slate-400 rounded-lg mr-6 text-gray-700">
        <div className="flex space-x-3">
          <div>
            <h1>Serial Number</h1>
            <input
              type="text"
              id="serialNumInput"
              onChange={(e) => setSerialNum(e.target.value)}
              className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
            />
          </div>
          <div>
            <h1>Title</h1>
            <input
              type="text"
              id="titleInput"
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
            />
          </div>
        </div>

        <div className="flex space-x-3">
          <div>
            <h1>Voltage</h1>
            <input
              onChange={(e) => setVoltage(e.target.value)}
              type="text"
              id="voltInput"
              className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
            />
          </div>
          <div>
            <h1>Wattage</h1>
            <input
              onChange={(e) => setWattage(e.target.value)}
              type="text"
              id="wattsInput"
              className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
            />
          </div>
        </div>

        <div>
          <h1>Plug Size</h1>
          <select
            className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
            onChange={(e) => {
              setPlugSize(Number(e.target.value));
              if (Number(e.target.value) >= 3) setTerminalBox("N4X");
            }}
          >
            <option value={1}>1&quot; NPT</option>
            <option value={1.25}>1.25&quot; NPT</option>
            <option value={1.5}>1.5&quot; NPT</option>
            <option value={2}>2&quot; NPT</option>
            <option value={2.5}>2.5&quot; NPT</option>
            <option value={3}>3&quot; NPT</option>
            <option value={4}>4&quot; NPT</option>
          </select>
        </div>

        <div>
          <h1>Immersion Length</h1>
          <input
            type="text"
            id="immersLength"
            defaultValue={10}
            onChange={(e) => setImmersionLength(Number(e.target.value) || 0)}
            className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
          />
        </div>

        <div>
          <h1>Number of Elements</h1>
          <select
            className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
            onChange={(e) => {
              setElementNum(Number(e.target.value));
            }}
            id="elementNumOptions"
          >
            {plugSizeOP === 1 && (
              <>
                <option value="1" selected>
                  1 Element
                </option>
                <option value="1.5">1 Element (Foldback)</option>
              </>
            )}
            {(plugSizeOP === 1.25 || plugSizeOP === 1.5) && (
              <>
                <option value="2" selected>
                  2 Elements
                </option>
                <option value="3">3 Elements</option>
              </>
            )}

            {(plugSizeOP === 2 || plugSizeOP === 2.5) && (
              <>
                <option value="2.475" selected>
                  2 Elements
                </option>
                <option value="3.475">3 Elements</option>
              </>
            )}

            {(plugSizeOP === 3 || plugSizeOP === 4) && (
              <>
                <option value="3.475" selected>
                  3 Elements
                </option>
                <option value="6.475">6 Elements</option>
              </>
            )}
          </select>
        </div>

        {elementNumVar === 1.5 && (
          <div>
            <h1>Foldback Length</h1>
            <input
              type="text"
              id="foldbackLengthInput"
              defaultValue={5}
              onChange={(e) => setFoldLength(Number(e.target.value) || 0)}
              className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
            />
          </div>
        )}

        <div>
          <h1>Element Sheath Material</h1>
          <select
            className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
            onChange={(e) => {
              setMaterial(String(e.target.value));
            }}
          >
            <option>304SS</option>
            <option>310SS</option>
            <option>Incoloy 800/840</option>
            <option>Inconel 600</option>
            <option>Titanium</option>
            <option>PTFE Teflon</option>
          </select>
        </div>

        <div>
          <h1>Temp Sensor Option</h1>
          <div className="flex space-x-3">
            <select
              className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
              onChange={(e) => {
                setProcessSensor(e.target.value);
                if (e.target.value !== "TS") setProcessTStat("");
                else setProcessTStat("SPST");
              }}
              value={processSensor}
            >
              <option value="nT">None</option>
              <option value="TC">Process Thermocouple</option>
              <option value="TS">Process Thermostat</option>
            </select>

            <select
              className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
              onChange={(e) => setHLSensor(e.target.value)}
              value={HLSensor}
            >
              <option value="nHL">None</option>
              <option value="HLTC">High-Limit Thermocouple</option>
              <option value="HLTS">High-Limit Thermostat</option>
            </select>
          </div>
        </div>

        {processSensor === "TS" && (
          <div>
            <h1>Temp Sensor Option</h1>
            <select
              className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
              onChange={(e) => {
                setProcessTStat(e.target.value);
                if (e.target.value === "DPST") setTerminalBox("N4X");
              }}
              value={processTStat}
            >
              <option value="SPST">SPST Thermostat</option>
              <option value="DPST">DPST Thermostat</option>
            </select>
          </div>
        )}

        {processSensor !== "nT" && (
          <div>
            <h1>Thermowell Length</h1>
            <input
              type="text"
              id="psLength"
              defaultValue={5}
              onChange={(e) => setThermoLength(Number(e.target.value) || 0)}
              className="input input-bordered border-cyan-500 border-2 input-xs max-w-xs text-gray-700 dark:text-gray-300"
            />
          </div>
        )}

        <div>
          <h1>Terminal Box</h1>
          <select
            className="select select-xs border-cyan-500 border-2 text-gray-700 dark:text-gray-300"
            onChange={(e) => setTerminalBox(e.target.value)}
          >
            {(processTStat !== "DPST" || processSensor !== "TS") &&
              plugSizeOP < 3 && (
                <>
                  <option value="N1">NEMA 1</option>
                  <option value="N4">NEMA 4</option>
                  <option value="N47">NEMA 4/7</option>
                </>
              )}
            <option value="N4X">NEMA 4x</option>
          </select>
        </div>
      </div>

      <Drawing
        serialNum={serialNum}
        title={titleVar}
        plugSize={plugSizeOP}
        lengthElement={immersionLengthVar}
        foldLength={foldLengthVar}
        elementNum={elementNumVar}
        terminalBox={terminalBoxVar}
        processTemp={processSensor}
        hlSensor={HLSensor}
        typeThermostat={processTStat}
        thermoLength={thermoLength}
        material={materialVar}
        voltage={voltsVar}
        wattage={wattsVar}
      />
    </div>
  );
};

export default App;

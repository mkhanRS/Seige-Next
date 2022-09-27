import { useEffect, useState } from "react";
import Chips from "@components/common/Chips/Chips";
import LineChart from "@components/common/LineChart";
import GroupButton from "@components/common/GroupButton/GroupButton";

const getChips = (filters) => {
  let chips = [];

  if (filters.positionIssue.length > 0) {
    chips = [
      ...chips,
      {
        key: "positionIssue",
        title: filters.positionIssue,
        value: filters.positionIssue,
      },
    ];
  }
  if (filters.view.length > 0) {
    chips = [
      ...chips,
      {
        key: "view",
        title: filters.view,
        value: filters.view,
      },
    ];
  }
  if (filters.quality.length > 0) {
    chips = [
      ...chips,
      {
        key: "quality",
        title: filters.quality,
        value: filters.view,
      },
    ];
  }

  return chips;
};

export default function POTrending() {
  const [positionIssue, setPositionIssue] = useState("");
  const [view, setView] = useState("");
  const [quality, setQuality] = useState("");

  const [chips, setChips] = useState([]);

  useEffect(() => {
    setChips(getChips({ positionIssue, view, quality }));
  }, [positionIssue, view, quality]);

  const printButtonLabel = (event) => {
    console.log(event.target.name);
    //do some stuff here
  };

  return (
    <div className="flow" style={{ padding: "1rem" }}>
      <div className="d--f ai--c jc--sb">
        <h3 className="fs-secondary-heading text-primary-400">Trending</h3>
        <div className="d--f ai--c" style={{ gap: "2rem" }}>
          <select className="select text-primary-400 fs-300" onChange={(e) => setPositionIssue(e.target.value)}>
            <option value="">Select positioning issue</option>
          </select>
          <select className="select text-primary-400 fs-300" onChange={(e) => setView(e.target.value)}>
            <option value="">Select view</option>
          </select>
          <select
            className="select text-primary-400 fs-300"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
          >
            <option value="">Select Quality</option>
            <option value="Good + Perfect Quality">Good + perfect</option>
          </select>
        </div>
      </div>

      <div className="d--f jc--sb ai--c" style={{ "--flow-space": "1.25rem" }}>
        <div className="fg--1">
          <Chips chips={chips} setChips={setChips} />
        </div>
        <GroupButton buttons={["Year", "Quarter", "Month", "Week"]} buttonOnClickHandler={printButtonLabel} />
      </div>

      <div className="d--f ai--c" style={{ gap: "1rem", "--flow-space": "1.25em" }}>
        <div className="d--if ai--c" style={{ gap: "0.5rem" }}>
          <div
            style={{ width: "10px", height: "10px", borderRadius: "4px", backgroundColor: "var(--clr-primary-100)" }}
          ></div>
          <span>Other Practices</span>
        </div>
        <div className="d--if ai--c" style={{ gap: "0.5rem" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "4px" }} className="bg-accent-400"></div>
          <span>This Practice</span>
        </div>
      </div>

      <LineChart />
    </div>
  );
}

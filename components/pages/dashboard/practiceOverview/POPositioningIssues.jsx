import ProgressLineSingle from "../../../common/ProgressLineSingle";

export default function POPositioningIssues() {
  return (
    <div className="flow" style={{ padding: "1rem" }}>
      <div>
        <h3 className="fs-secondary-heading text-primary-400">Positioning issues</h3>
      </div>

      <div style={{ "--flow-space": "2rem" }}>
        <ProgressLineSingle label="Tissue Labelingggg" width="42" size="medium" />
        <ProgressLineSingle label="Tissue Labelingggg" width="27" size="medium" />
        <ProgressLineSingle label="Tissue Labelingggg" width="12" size="medium" />
        <ProgressLineSingle label="Tissue Labelingggg" width="7" size="medium" />
        <ProgressLineSingle label="Tissue Labelingggg" width="5" size="medium" />
      </div>

      <div style={{ textAlign: "right" }}>
        <p className="text-primary-100 fs-300">Calculated of 10 548 images (95% of total)</p>
      </div>

      <div style={{ textAlign: "center", "--flow-space": "2rem" }}>
        <p className="cursor-pointer text-accent-400">View detailed breakdown</p>
      </div>
    </div>
  );
}

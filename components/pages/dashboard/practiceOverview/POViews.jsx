import { DoughnutChart } from "@components/common/Doughnut";

export default function POViews() {
  return (
    <div style={{ padding: "1rem" }}>
      <div className="d--f ai--c jc--sb">
        <h3 className="fs-secondary-heading text-primary-400">Views</h3>
        <select className="select text-primary-400 fs-300">
          <option value="">Select positioning issues</option>
        </select>
      </div>

      <div className="d--f fd--c" style={{ width: "40%", margin: "2rem auto", gap: "2rem" }}>
        <DoughnutChart />
        <DoughnutChart />
      </div>

      <div style={{ textAlign: "center" }}>
        <p className="cursor-pointer text-accent-400">View detailed breakdown</p>
      </div>
    </div>
  );
}

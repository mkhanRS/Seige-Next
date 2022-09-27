import { BsExclamationDiamond } from "react-icons/bs";
import { FiChevronUp } from "react-icons/fi";
import ProgessLineMultiple from "@components/common/ProgressLineMultiple";
import ProgressLineSingle from "@components/common/ProgressLineSingle";

export default function POSummaryCards() {
  return (
    <div className="columns">
      <div className="bg-neutral-100" style={{ borderRadius: "12px 0 0 12px" }}>
        <div style={{ padding: "23px 24px" }}>
          <div className="d--f jc--sb ai--c text-primary-100">
            <span className="fs-300">Perfect images</span>
            <BsExclamationDiamond />
          </div>
          <div style={{ paddingTop: "var(--size-500)", gap: "10px" }} className="d--f ai--b">
            <h1 className="fs-800">15%</h1>
            <span
              className="fs-300 d--if ai--c br--1"
              style={{ color: "#19CE61", backgroundColor: "#E7F8EE", padding: "2px 7.5px" }}
            >
              +2%
              <FiChevronUp strokeWidth={4} />
            </span>
            <span className="fs-300 margin-left-auto text-accent-400 cursor-pointer">View</span>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100">
        <div style={{ padding: "23px 24px" }}>
          <div className="d--f jc--sb ai--c text-primary-100">
            <span className="fs-300">Perfect images</span>
            <BsExclamationDiamond />
          </div>
          <div style={{ paddingTop: "var(--size-500)", gap: "10px" }} className="d--f ai--b">
            <h1 className="fs-800">15%</h1>
            <span
              className="fs-300 d--if ai--c br--1"
              style={{ color: "#19CE61", backgroundColor: "#E7F8EE", padding: "2px 7.5px" }}
            >
              +2%
              <FiChevronUp strokeWidth={4} />
            </span>
            <span className="fs-300 margin-left-auto text-accent-400 cursor-pointer">View</span>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100">
        <div style={{ padding: "23px 24px" }}>
          <div className="d--f jc--sb ai--c text-primary-100">
            <span className="fs-300">Perfect images</span>
            <BsExclamationDiamond />
          </div>
          <div style={{ paddingTop: "var(--size-500)", gap: "10px" }} className="d--f ai--b">
            <h1 className="fs-800">15%</h1>
            <span
              className="fs-300 d--if ai--c br--1"
              style={{ color: "#19CE61", backgroundColor: "#E7F8EE", padding: "2px 7.5px" }}
            >
              +2%
              <FiChevronUp strokeWidth={4} />
            </span>
            <span className="fs-300 margin-left-auto text-accent-400 cursor-pointer">View</span>
          </div>
        </div>
      </div>
      <div style={{ padding: "23px 24px", whiteSpace: "nowrap" }}>
          <table style={{ width: "100%", textAlign: "left" }}>
            <thead>
              <tr>
                <th>
                  <div className="d--f ai--c" style={{ gap: "1rem" }}>
                    <select className="select">
                      <option value="Least performing sites">Least performing sites</option>
                    </select>
                    <span className="text-accent-400 fs-300 cursor-pointer">See all</span>
                  </div>
                </th>
                <th className="fs-300" style={{ paddingLeft: "20px" }}>
                  Image quality frequency
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fs-300 text-primary-300" style={{ paddingLeft: "4px" }}>
                  UCSF Medical Center
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <div className="d--f ai--c fs-300" style={{ gap: "1rem" }}>
                    <ProgessLineMultiple
                      progressParts={[
                        {
                          percentage: "12",
                          color: "#27C052",
                        },
                        {
                          percentage: "25",
                          color: "#ABD84B",
                        },
                        {
                          percentage: "63",
                          color: "#DF6666",
                        },
                      ]}
                    />
                    <span style={{ color: "#27C052" }}>12%</span>
                    <span style={{ color: "#ABD84B" }}>25%</span>
                    <span style={{ color: "#DF6666" }}>63%</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="fs-300 text-primary-300" style={{ paddingLeft: "4px" }}>
                  Massachusetts General Hospital
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <div className="d--f ai--c fs-300" style={{ gap: "1rem" }}>
                    <ProgessLineMultiple
                      progressParts={[
                        {
                          percentage: "12",
                          color: "#27C052",
                        },
                        {
                          percentage: "25",
                          color: "#ABD84B",
                        },
                        {
                          percentage: "63",
                          color: "#DF6666",
                        },
                      ]}
                    />
                    <span style={{ color: "#27C052" }}>12%</span>
                    <span style={{ color: "#ABD84B" }}>25%</span>
                    <span style={{ color: "#DF6666" }}>63%</span>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="fs-300 text-primary-300" style={{ paddingLeft: "4px" }}>
                  Johns Hopkins Hospital
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <div className="d--f ai--c fs-300" style={{ gap: "1rem" }}>
                    <ProgessLineMultiple
                      progressParts={[
                        {
                          percentage: "12",
                          color: "#27C052",
                        },
                        {
                          percentage: "25",
                          color: "#ABD84B",
                        },
                        {
                          percentage: "63",
                          color: "#DF6666",
                        },
                      ]}
                    />
                    <span style={{ color: "#27C052" }}>12%</span>
                    <span style={{ color: "#ABD84B" }}>25%</span>
                    <span style={{ color: "#DF6666" }}>63%</span>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    
  );
}

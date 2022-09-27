import useBreadcrumb from "@hooks/useBreadcrumb";
import Breadcrumb from "@components/common/Breadcrumb/Breadcrumb";
import Modal from "@components/common/Modal/Modal";
import { useEffect, useMemo, useState } from "react";
import { setBreadcrumb } from "@reducers/BreadcrumbReducer";
import usePracticeOverView from "../../components/pages/dashboard/practiceOverview/PracticeOverviewController";

import FilterButton from "../../components/common/FilterButton/FilterButton";
import POSummaryCards from "../../components/pages/dashboard/practiceOverview/POSummaryCards";
import POViews from "../../components/pages/dashboard/practiceOverview/POViews";
import POTrending from "../../components/pages/dashboard/practiceOverview/POTrending";
import POPositioningIssues from "../../components/pages/dashboard/practiceOverview/POPositioningIssues";
import POTable from "../../components/pages/dashboard/practiceOverview/POTable";

export default function PracticeOverViewPage() {
  const { _, dispatch: breadcrumbDispatcher } = useBreadcrumb();
  const { practiceRegion, practiceDuration, setPracticeRegion, setPracticeDuration, chips } = usePracticeOverView();

  const [openModal, setOpenModal] = useState(false);

  const breadcrumbs = useMemo(
    () => [
      { title: "Dashboard", link: "/dashboard" },
      { title: "Practice Overview", link: "/dashboard/practice-overview", current: true },
    ],
    []
  );

  useEffect(() => {
    breadcrumbDispatcher(setBreadcrumb(breadcrumbs));
  }, [breadcrumbDispatcher, breadcrumbs]);

  return (
    <div style={{ position: "relative", minHeight: "calc(100vh - var(--size-nav))" }}>
      <div className="container flow">
        <Breadcrumb />

        <div className="d--f ai--c fw--w">
          <h1 className="fs-primary-heading">Summary statistics</h1>
          {/* get options from api?? */}
          <select
            className="select fs-primary-heading text-accent-400"
            value={practiceRegion}
            onChange={(e) => setPracticeRegion(e.target.value)}
          >
            <option value="NYC">NYC clinics practice</option>
            <option value="FL">FL clinics practice</option>
          </select>
          {/* get options from api?? */}

          {/* get options from api?? */}
          <select
            className="select fs-primary-heading text-accent-400"
            style={{ marginLeft: "var(--size-400)" }}
            value={practiceDuration}
            onChange={(e) => setPracticeDuration(e.target.value)}
          >
            <option value="1mo">1 Month</option>
            <option value="2mo">2 Months</option>
          </select>
          {/* get options from api?? */}
          <FilterButton title="NYC clinics practice" setOpenModal={setOpenModal} chips={chips}></FilterButton>
        </div>

        <POSummaryCards />

        <div className="columns" style={{ "--gap": "1rem" }}>
          <div className="card">
            <POViews />
          </div>

          <div className="card" style={{ "--flex": 2 }}>
            <POTrending />
          </div>
        </div>

        <div className="columns" style={{ "--gap": "1rem" }}>
          <div className="card">
            <POPositioningIssues />
          </div>

          <div className="card" style={{ "--flex": 2 }}>
            <POTable />
          </div>
        </div>
      </div>

      <Modal openModal={openModal} setOpenModal={setOpenModal} position="right">
        <p>Hello</p>
      </Modal>
    </div>
  );
}

import Table from "@components/common/Table/Table";
import ProgressLineMultiple from "@components/common/ProgressLineMultiple";
import TableHeaderBox from "@components/common/TableHeaderBox";

const progressData = [
  {
    percentage: "50",
    color: "#27C052",
  },
  {
    percentage: "30",
    color: "#ABD84B",
  },
  {
    percentage: "20",
    color: "#DF6666",
  },
];

const rawTableData = [
  {
    id: 1,
    technologist: "Centro comercial Moctezuma",
    progress: <ProgressLineMultiple progressParts={progressData} height="2px" />,
    site: "Massac General",
    studies: "Massachusetts General Hospital",
    exposures: "4,5",
    perfect: 211,
    good: 11,
    bad: 111,
    issues: "30%",
    onClick: function () {
      console.log(this.id);
    },
  },
  {
    id: 2,
    technologist: "Ame comercial Moctezuma",
    progress: <ProgressLineMultiple progressParts={progressData} />,
    site: "Boston",
    studies: "Massachusetts General Hospital",
    exposures: "4,5",
    perfect: 511,
    good: 11,
    bad: 11,
    issues: "40%",
  },
  {
    id: 3,
    technologist: "asd ercial Moctezuma",
    progress: <ProgressLineMultiple progressParts={progressData} />,
    site: "California",
    studies: "Massachusetts General Hospital",
    exposures: "4,5",
    perfect: 311,
    good: 13,
    bad: 511,
    issues: "70%",
  },
  {
    id: 4,
    technologist: "MM comercial Moctezuma",
    progress: <ProgressLineMultiple progressParts={progressData} />,
    site: "California",
    studies: 123,
    exposures: "4,5",
    perfect: 311,
    good: 13,
    bad: 511,
    issues: "70%",
  },
  {
    id: 5,
    technologist: "SS comercial Moctezuma",
    progress: <ProgressLineMultiple progressParts={progressData} />,
    site: "California",
    studies: "Massachusetts General Hospital",
    exposures: "4,5",
    perfect: 311,
    good: 13,
    bad: 511,
    issues: "70%",
  },
  {
    id: 6,
    technologist: "Lop comercial Moctezuma",
    progress: <ProgressLineMultiple progressParts={progressData} />,
    site: "California",
    studies: 123,
    exposures: "4,5",
    perfect: 311,
    good: 13,
    bad: 511,
    issues: "70%",
  },
  {
    id: 7,
    technologist: "Lop comercial Moctezuma",
    progress: <ProgressLineMultiple progressParts={progressData} />,
    site: "California",
    studies: 123,
    exposures: "4,5",
    perfect: 311,
    good: 13,
    bad: 511,
    issues: "70%",
  },
];

const SitesListTable = () => {
  const columns = [
    {
      field: "site",
      title: "Site",
      sortable: true,
      format: (value) => (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ flex: 1 }}>{value}</span>
          <ProgressLineMultiple progressParts={progressData} height="2px" width="7em" />
        </div>
      ),
    },

    { field: "studies", title: "Studies", sortable: true },
    { field: "perfect", title: "Perfect", align: "center", box: <TableHeaderBox color="#ABD84B" />, sortable: true },
    { field: "good", title: "Good", align: "center", box: <TableHeaderBox color="#27C052" />, sortable: true },
    { field: "bad", title: "Bad", align: "center", box: <TableHeaderBox color="#DF6666" />, sortable: true },
  ];

  return (
    <div className="flow">
      <Table columns={columns} rows={rawTableData} />
      <div style={{ textAlign: "center", "--flow-space": "2rem" }}>
        <p className="cursor-pointer text-accent-400">View detailed breakdown</p>
      </div>
    </div>
  );
};

export default SitesListTable;

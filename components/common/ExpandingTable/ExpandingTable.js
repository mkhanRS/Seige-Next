import React, { useState, useEffect } from "react";
import styles from "./styles/table.module.css";
import ExpandingTableBody from "./ExpandingTableBody";
import ExpandingTableHeader from "./ExpandingTableHeader";

export default function ExpandingTable({ columns, rows }) {
  const [selected, setSelected] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState([]);
  const [sortableFields, setSortableFields] = useState([]);
  const [tableData, setTableData] = useState(rows);

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "ASC" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  const selectAll = () => {
    if (selected.length === rows.length) {
      setSelected([]);
      setSelectedBatch([]);
    } else {
      const subDataIdArr = rows?.map((row) => {
        return row?.subData?.map((d) => d.id);
      });
      setSelected(rows.map((row) => row?.id));
      setSelectedBatch(subDataIdArr.flat().filter(Boolean));
    }
  };

  const selectOne = (id) => {
    const one = selected.find((item) => item === id);
    if (one) {
      const deleted = selected.filter((item) => item !== id);
      setSelected(deleted);
    } else {
      setSelected([...selected, id]);
    }
  };

  const selectBatch = (arr) => {
    const every = arr?.every((el) => selectedBatch.includes(el));

    if (every) {
      const deleted = selectedBatch.filter((item) => !arr.includes(item));
      setSelectedBatch(() => deleted);
    } else {
      setSelectedBatch([...selectedBatch, ...arr]);
    }
  };

  useEffect(() => {
    sortableFields.forEach((item) => {
      handleSorting(item.name, item.order);
    });
    console.log(sortableFields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortableFields]);

  return (
    <div className="card" style={{ overflow: "scroll" }}>
      <table className={styles.table}>
        <thead>
          <ExpandingTableHeader
            columns={columns}
            rows={tableData}
            sortableFields={sortableFields}
            setSortableFields={setSortableFields}
            selectAll={selectAll}
            selected={selected}
          />
        </thead>
        <tbody>
          <ExpandingTableBody
            columns={columns}
            rows={tableData}
            selected={selected}
            selectedBatch={selectedBatch}
            selectOne={selectOne}
            selectBatch={selectBatch}
          />
        </tbody>
      </table>
    </div>
  );
}

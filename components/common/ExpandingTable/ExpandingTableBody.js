import React, { useEffect, useState } from "react";
import styles from "./styles/table.module.css";

export default function ExpandingTableBody({ columns, rows, selected, selectedBatch, selectOne, selectBatch }) {
  const [expanding, setExpanding] = useState([]);

  const expandingHandler = (id) => {
    if (expanding.includes(id)) {
      const newArr = expanding.filter((el) => el !== id);
      setExpanding(newArr);
    } else {
      setExpanding([...expanding, id]);
    }
  };

  // useEffect(() => {
  //   // console.log(selectedBatch.length);

  //   rows.forEach((row) => {
  //     if (row?.subData?.map((d) => d.id)?.every((el) => selectedBatch.includes(el))) selectOne(row?.id);
  //   });
  // }, [selectedBatch, rows]);

  return (
    <>
      {rows.map((row, i, arr) => {
        return (
          <React.Fragment key={i}>
            <tr key={i} className="text-primary-300">
              {columns.data.map((column, i) => {
                if (column.format) {
                  if (columns.expandable) {
                    return (
                      <td key={column.field} style={{ textAlign: column.align }}>
                        {column.format(
                          row[column.field], // row[column.field] is the value of the field
                          row, // row is the entire row
                          expanding.includes(row.id), // expanding is the array of expanded rows
                          () => expandingHandler(row?.id) // expandingHandler is the function to expand/collapse the row
                        )}
                      </td>
                    );
                  } else {
                    return (
                      <td key={column.field} style={{ textAlign: column.align }}>
                        {column.format(row[column.field], row)}
                      </td>
                    );
                  }
                }
                return (
                  <td key={column.field} style={{ textAlign: column.align }}>
                    {row[column.field]}
                  </td>
                );
              })}
              {columns.selectable ? (
                <td>
                  <input
                    type="checkbox"
                    onChange={() => {
                      if (columns.expandable) {
                        selectBatch(row?.subData?.map((el) => el?.id) ?? []);
                        selectOne(row?.id);
                      } else {
                        selectOne(row?.id);
                      }
                    }}
                    checked={
                      columns?.expandable
                        ? row?.subData?.every((el) => selectedBatch.includes(el?.id)) || selected.includes(row?.id)
                          ? true
                          : false
                        : selected.includes(row?.id)
                        ? true
                        : false
                    }
                  />
                </td>
              ) : null}
            </tr>

            {/* SubData */}
            {row?.subData?.length &&
              row?.subData?.map((subItem, index, arr) => {
                return (
                  <tr
                    className={[
                      styles.collapse,
                      expanding.includes(row.id) ? styles["collapse__open"] : null,
                      index + 1 === arr.length ? styles["collapse--last"] : null,
                      "fs-300",
                      "text-primary-300",
                    ].join(" ")}
                    key={subItem?.id}
                  >
                    {columns?.subData?.map((column, i) => {
                      if (column.format) {
                        return (
                          <td key={column.field} style={{ textAlign: column.align }}>
                            {column.format(subItem[column.field])}
                          </td>
                        );
                      }
                      return (
                        <td key={column.field} style={{ textAlign: column.align }}>
                          {subItem[column.field]}
                        </td>
                      );
                    })}
                    {columns.selectable ? (
                      <td>
                        <input
                          type="checkbox"
                          onChange={() => selectBatch([subItem?.id])} //selectbatch expects array
                          checked={selectedBatch.includes(subItem?.id) ? true : false}
                        />
                      </td>
                    ) : null}
                  </tr>
                );
              })}
          </React.Fragment>
        );
      })}
    </>
  );
}

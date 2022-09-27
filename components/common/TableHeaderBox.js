import React from "react";

function TableHeaderBox(props) {
  return (
    <div
      style={{
        height: "7px",
        width: "7px",
        backgroundColor: props.color,
        marginRight: "2px",
        flexShrink: 0, // this is to prevent the header box from shrinking when the table is too small
      }}
    ></div>
  );
}

export default TableHeaderBox;

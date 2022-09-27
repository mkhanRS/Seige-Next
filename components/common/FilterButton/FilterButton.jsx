import { BiFilterAlt } from "react-icons/bi";
import styles from "./filterButton.module.css";

export default function FilterButton({ setOpenModal, chips, title }) {
  return (
    <button
      onClick={() => setOpenModal(true)}
      className={["d--if ai--c bg-neutral-100  br--1 cursor-pointer margin-left-auto", styles.filterBtn].join(" ")}
    >
      <BiFilterAlt className="text-primary-100" />
      <span className="fw-semi-bold">{title}</span>
      {chips.length ? (
        <span
          style={{ width: "1rem", height: "1rem", backgroundColor: "#1EADC0", borderRadius: "4px" }}
          className="d--f ai--c jc--c text-neutral-100"
        >
          {chips.length}
        </span>
      ) : null}
    </button>
  );
}

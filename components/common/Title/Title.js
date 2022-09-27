import { AiOutlineFilter } from "react-icons/ai";
import { GrPrevious } from "react-icons/gr";

const Title = ({ setOpenModal, chips }) => {
  return (
    <div className="d--f jc--sb ai--c">
      <div style={{ gap: "1.25rem" }} className="d--f ai--c">
        <div>
          <div style={{ padding: "0.5rem", cursor: "pointer" }} className="d--f ai--c jc--c br--1 bg-neutral-100">
            <GrPrevious style={{ fontSize: "var(--fs-300)", fontWeight: "var(--fw-bold)" }} />
          </div>
        </div>
        <h3 className="fs-secondary-heading fw-semi-bold">John Doe’s image list</h3>
      </div>
      <button
        onClick={() => setOpenModal(true)}
        style={{ padding: "0.5rem 1rem", minWidth: "7.1rem", border: "1px solid #E4E4E4", gap: "0.6em" }}
        className="d--if ai--c bg-neutral-100  br--1 cursor-pointer"
      >
        <AiOutlineFilter />
        <span className="fw-semi-bold">Filters</span>
        {chips.length ? (
          <span
            style={{ width: "1rem", height: "1rem", backgroundColor: "#1EADC0", borderRadius: "4px" }}
            className="d--f ai--c jc--c text-neutral-100"
          >
            {chips.length}
          </span>
        ) : null}
      </button>
    </div>
  );
};

export default Title;

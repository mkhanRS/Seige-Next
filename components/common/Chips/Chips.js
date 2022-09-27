import styles from "./Chips.module.css";

const ChipsContainer = ({ chips, setChips }) => {
  const deleteOne = (key) => {
    const newChipsArr = chips.filter((chip) => chip.key !== key);
    setChips(newChipsArr);
  };

  const deleteAll = () => {
    setChips([]);
  };

  return (
    <>
      {chips.length > 0 ? (
        <div style={{ gap: "1rem" }} className="d--f fw--w ai--c">
          {chips.map((chip) => (
            <div
              key={chip.key}
              style={{ background: "#e7e7e7", padding: "0.5rem 0.75rem", gap: "1.25rem" }}
              className="d--f jc--c ai--c br--1 fw-semi-bold fs-300 text-primary-300"
            >
              <span>{chip.title}</span>
              <button className={styles.btn__close} onClick={() => deleteOne(chip.key)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          ))}
          <p className="cursor-pointer" style={{ color: "#FF2828" }} onClick={deleteAll}>
            Clear all
          </p>
        </div>
      ) : null}
    </>
  );
};

export default ChipsContainer;

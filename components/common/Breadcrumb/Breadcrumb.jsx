import useBreadcrumb from "../../../hooks/useBreadcrumb";
import styles from "./breadcrumb.module.css";
import { BiHomeAlt } from "react-icons/bi";
import { FiChevronRight } from "react-icons/fi";

const Logo = {
  Dashboard: <BiHomeAlt />,
  default: <BiHomeAlt />,
};

const Breadcrumb = () => {
  const { state: breadcrumbs } = useBreadcrumb();
  return (
    <nav>
      <ol className={[styles["breadcrumb"]].join(" ")}>
        {breadcrumbs?.map((el) => {
          return (
            <li key={el.title}>
              <a
                href={el.link}
                className={["fs-300 text-primary-100 fw-semi-bold d--if ai--c", el.current ? styles.active : ""].join(
                  " "
                )}
                style={{ gap: "0.4rem" }}
              >
                {Logo[el.title] ?? Logo.default}
                {el.title}
                <FiChevronRight className={styles.next} />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

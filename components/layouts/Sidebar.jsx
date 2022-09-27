import { useRouter } from "next/router";
import { useState } from "react";
import { BiHome } from "react-icons/bi";

const SIDEBAR_LINKS = [
  {
    id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5e",
    link: "/dashboard/practice-overview",
    title: "Home",
    icon: "",
  },
  {
    id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5ee",
    link: "/",
    title: "Home1",
    icon: "",
  },
  {
    id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5eee",
    link: "/",
    title: "Home2",
    icon: "",
  },
  {
    id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5eeee",
    link: "/",
    title: "Home3",
    icon: "",
  },
];

export default function SideBar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("46f7dc9b-e75d-40e0-8d14-1e7334d16d5e");
  const handleActiveRoute = (link) => {
    console.log(link);
    setActiveLink(link.id);
    router.push(link.link);
  }
  return (
    <nav
      style={{
        position: "fixed",
        height: "100%",
        width: "75px",
        background: "var(--clr-sidebar-bg)",
        padding: "20px 0",
      }}
    >
      {SIDEBAR_LINKS.map((link) => (
        <div
          key={link.id}
          className={`sidebar__link ${activeLink === link.id ? "active" : null}`}
          onClick={() => handleActiveRoute(link)}
        >
          <div className="triangle1"></div>

          <div className="sidebar__link_icon">
            <BiHome size={25} color={activeLink === link.id ? "black" : "white"} />
          </div>

          <div className="triangle2"></div>
        </div>
      ))}
    </nav>
  );
}

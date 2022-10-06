import { useRouter } from "next/router";
import { useState } from "react";
import { BiHome, BiImages } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";

const SIDEBAR_LINKS = [
  {
    id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5e",
    link: "/dashboard/practice-overview",
    title: "Dashboard",
    slug: "dashboard",
    icon: "",
  },
  {
    id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5ee",
    link: "/",
    title: "Image List",
    slug: "image-list",
    icon: "",
  },
  {
    id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5eee",
    link: "/",
    title: "Technologists List",
    slug: "technologists-list",
    icon: "",
  },
  {
    id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5eeee",
    link: "/",
    title: "test",
    slug: "test",
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

  // to expand sidebar
  const [expandSidebar, setExpandSidebar] = useState(false);
  const handleExpandSidebar = () => {
    console.log("expandSidebar ", expandSidebar);
    setExpandSidebar(!expandSidebar);
  }

  return (
    <nav className={!expandSidebar ? "sidebar__normal" : "sidebar__expand"}>

      <div
        className={!expandSidebar ? "sidebar__brand" : "sidebar__brand__expanded"}
        onClick={() => handleExpandSidebar()}
      >
        <BsStack size={25} color="white" />
      </div>
      
      {SIDEBAR_LINKS.map((link) => (
        <div
          key={link.id}
          className={`sidebar__link ${activeLink === link.id ? "active" : null}`}
          onClick={() => handleActiveRoute(link)}
        >
          <div className="triangle1"></div>

          <div className={`${!expandSidebar ? "sidebar__link_icon" : "sidebar__link__icon__expanded" }`}>

            {link.slug === "dashboard" ? (
              <span style={{ display: "flex", alignItems: "center" }}>
                <BiHome size={25} color={activeLink === link.id ? "black" : "white"} />
                <span className={`${!expandSidebar ? "d__none" : "side__menu__text" } ${activeLink === link.id ? "side__menu__text__active" : "side__menu__text__inactive"}`}>Dashboard</span>
              </span>
            ) : link.slug === "image-list" ? (
              <span style={{ display: "flex", alignItems: "center" }}>
                <BiImages size={25} color={activeLink === link.id ? "black" : "white"} />
                <span className={`${!expandSidebar ? "d__none" : "side__menu__text" } ${activeLink === link.id ? "side__menu__text__active" : "side__menu__text__inactive"}`}>Image List</span>
              </span>
            ) : link.slug === "technologists-list" ? (
              <span style={{ display: "flex", alignItems: "center" }}>
                <HiUsers size={25} color={activeLink === link.id ? "black" : "white"} />
                <span className={`${!expandSidebar ? "d__none" : "side__menu__text" } ${activeLink === link.id ? "side__menu__text__active" : "side__menu__text__inactive"}`}>Technologists List</span>
              </span>
            ) : null}

          </div>

          <div className="triangle2"></div>
        </div>
      ))}
    </nav>
  );
}

import { useRef } from "react";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <>
      <div>
        <SideBar />
      </div>

      <main style={{ marginLeft: "75px" }}>
        <Navbar />
        {children}
      </main>
    </>
  );
}

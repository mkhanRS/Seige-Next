import { useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

export default function MainLayout({ children }) {

  const [expSidebar, setExpSidebar] = useState(false);

  // console.log("expSidebar ", expSidebar);

  return (
    <>
      <div>
        <SideBar setExpSidebar={setExpSidebar} />
      </div>

      <main className={`${!expSidebar ? "main__sidebar__normal" : "main__sidebar__expanded" }`}>
        <Navbar />
        {children}
      </main>
    </>
  );
}

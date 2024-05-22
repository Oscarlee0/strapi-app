import React from "react";
import { useGlobalContext } from "./Context";
import subLinks from "./data";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className='sidebar-container'></div>
      <button className='close-btn' onClick={closeSidebar}>
        <FaTimes />
      </button>
      <div className='sidebar-links '>
        {subLinks.map((item) => {
          const { pageId, page, links } = item;
          return (
            <article key={pageId}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {links.map((link) => {
                  const { url, id, label, icon } = link;
                  return (
                    <a key={id} href={url}>
                      {label}
                      {icon}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;

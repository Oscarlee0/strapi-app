import React, { useRef } from "react";
import sublinks from "./data";
import { useGlobalContext } from "./Context";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const submenuContainer = useRef(null);

  const handleSubmenu = (event) => {
    const submenu = submenuContainer.current;
    const { right, left, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleSubmenu}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((item) => {
          const { id, url, icon, label } = item;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;

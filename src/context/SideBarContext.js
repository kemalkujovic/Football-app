import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsSidebarVisible(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleSidebar() {
    if (window.innerWidth > 768) {
      return setIsSidebarVisible(false);
    }

    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

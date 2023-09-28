import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
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

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setOpen(!isOpen);
    }
  };

  return (
    <SidebarContext.Provider
      value={{ isSidebarVisible, toggleSidebar, handleClick, isOpen, setOpen }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

'use client'
import React, { useState, useEffect } from "react";
import { VscMenu } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";
import modalStyles from "../../app/styles/modal.module.css";

interface BurgerMenuProps {
  children: React.ReactNode;
}

function BurgerMenu({ children }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
        <div className="md:hidden" onClick={handleOpenMenu}>
          {!isOpen ? <VscMenu /> : <IoMdClose />}
        </div>
      </IconContext.Provider>
      {isOpen && (
        <div className={modalStyles.overlay}>
          <div className={modalStyles.modal}>
            <IconContext.Provider value={{ color: "#000", size: "25px" }}>
              <div className="md:hidden" onClick={handleOpenMenu}>
                {!isOpen ? <VscMenu /> : <IoMdClose />}
              </div>
            </IconContext.Provider>
            <div>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;

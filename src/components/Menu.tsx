//component imports
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

//hook imports
import { useState } from "react";
import { CloseButton } from "react-bootstrap";

const Menu = () => {
  //hooks
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleMenu = () => {
    if (showMenu == false) setShowMenu(true);
    else setShowMenu(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "10px",
        left: "10px",
        backgroundColor: "#CF698F",
        width: "45px",
        height: "45px",
        borderRadius: "100%",
        boxShadow: "3px 1px 1px rgba(0, 0, 0, 0.25)",
        color: "white",
      }}
    >
      <CiMenuBurger onClick={handleMenu} />
      <Offcanvas show={showMenu} onHide={handleMenu}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
      </Offcanvas>
    </div>
  );
};

export default Menu;

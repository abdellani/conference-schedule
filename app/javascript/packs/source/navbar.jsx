import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navbar = () =>
  <div>
    <div className="bg-violet1 d-flex flex-row-reverse py-2 px-2 ">
      <button className="bg-transparent border-0 text-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <h3 className="m-0">
        <FontAwesomeIcon icon={faBars} />
        </h3>
      </button>
    </div>
    <div className="collapse" id="navbar">
      <div class="shadow-sm bg-white py-2 px-2">
        Navbar items
      </div>
    </div>

  </div>

export default navbar;
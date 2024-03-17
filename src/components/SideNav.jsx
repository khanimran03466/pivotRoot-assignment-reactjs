import Avaibility from "./fiters-components/Avaibility";
import Brands from "./fiters-components/Brands";
import CaseSize from "./fiters-components/CaseSize";
import Gender from "./fiters-components/Gender";
import watchLogo from "/src/images/watch-logo.png";

import { IoFilter } from "react-icons/io5";

const SideNav = () => {
  return (
    <aside className="side-nav">
      <div className="watches-logo">
        <img src={watchLogo} alt="Watch Logo" />
        <span> (1150 Items) </span>
      </div>

      <div className="filter-sec">
        <span>
          {" "}
          <IoFilter /> Filter{" "}
        </span>
        <a href="#"> Clear All </a>
      </div>

      <CaseSize compName="Case Size" />

      <Avaibility compName="Availability" />
      
      <Gender compName="Gender" />

      <Brands compName="Brand" />
    </aside>
  );
};

export default SideNav;

import Avaibility from "./fiters-components/Avaibility";
import Brands from "./fiters-components/Brands";
import CaseSize from "./fiters-components/CaseSize";
import Gender from "./fiters-components/Gender";
import watchLogo from "/images/watch-logo.png";
import { useSelector, useDispatch } from "react-redux";
import { addFilter, removeFilter, resetFilter } from "./../store/filterSlice";

import { IoFilter } from "react-icons/io5";

const SideNav = () => {
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filters);

  const onChange = (compName, id, value) => {
    if (value) {
      dispatch(addFilter({ id: compName, filter: id }));
    } else {
      dispatch(removeFilter({ id: compName, filter: id }));
    }
  };

  const clearAllHandler = (e) => {
    e.preventDefault();
    dispatch(resetFilter());
  };

  return (
    <aside className="side-nav">
      <div className="watches-logo">
        <img src={watchLogo} alt="Watch Logo" />
        <span> (1150 Items) </span>
      </div>

      <div className="filter-sec">
        <span>
          <IoFilter />
          Filter
        </span>
        <a href="#" onClick={clearAllHandler}>
          {" "}
          Clear All{" "}
        </a>
      </div>

      <CaseSize
        compName="Case Size"
        data={filters}
        onChangeHandler={onChange}
      />

      <Avaibility
        compName="Availability"
        data={filters}
        onChangeHandler={onChange}
      />

      <Gender compName="Gender" data={filters} onChangeHandler={onChange} />

      <Brands compName="Brand" data={filters} onChangeHandler={onChange} />
    </aside>
  );
};

export default SideNav;

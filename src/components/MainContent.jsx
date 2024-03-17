import React, { useEffect, useState } from "react";
import MainAd from "./MainAd";
import SortLabel from "./SortLabel";
import Watches from "./Watches";

import { useSelector } from "react-redux";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredDataWithAd, setFilteredDataWithAd] = useState([]);

  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      setData(data.products);
      setFilteredData(data.products);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(filterData(data));
  }, [filters]);

  const filterData = (data) => {
    let filterData = [...data];
    for (var key of Object.keys(filters)) {
      filterData = filterData.filter((item) => {
        if (filters[key] === undefined || !filters[key].length) return true;
        if (key === "Case Size") {
          return filters[key].some((i) =>
            checkNumberInRange(item[key], i.replace("mm", ""))
          );
        }
        return filters[key].includes(item[key]);
      });
    }
    return filterData;
  };

  const checkNumberInRange = (number, range) => {
    // Check if the range contains "<" or ">"
    if (range.includes("<")) {
      const upperBound = parseInt(range.slice(1));
      return number < upperBound;
    } else if (range.includes(">")) {
      const lowerBound = parseInt(range.slice(1));
      return number > lowerBound;
    } else {
      // Parse the range
      const bounds = range.split("-").map((num) => parseInt(num));
      const lowerBound = bounds[0];
      const upperBound = bounds[1];
      // Check if the number falls between the range
      return number >= lowerBound && number <= upperBound;
    }
  };

  const onSortChange = (e) => {
    const value = e.target.value;
    let sortedData = [...filteredData];
    if (value === "lh") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (value === "hl") {
      sortedData.sort((a, b) => b.price - a.price);
    } else {
      sortedData = filterData(data);
    }
    setFilteredData(sortedData);
  };

  useEffect(() => {
    setFilteredDataWithAd(insetAd(filteredData, 6));
  }, [filteredData]);

  const insetAd = (array, addAfter) => {
    // Check if array is not empty and has more than 6 elements
    if (array.length > addAfter) {
      // Calculate number of empty objects to be inserted
      const numOfEmptyObjects = Math.floor(array.length / addAfter);

      // Insert empty objects after every 6th element
      for (let i = 1; i <= numOfEmptyObjects; i++) {
        const insertionIndex = i * addAfter + (i - 1); // Calculate insertion index
        array.splice(insertionIndex, 0, { type: "AD" }); // Insert empty object at calculated index
      }
    }

    return array;
  };

  return (
    <div className="main-content">
      <MainAd />
      <SortLabel onChange={onSortChange} />
      <Watches data={filteredDataWithAd} />
    </div>
  );
};

export default MainContent;

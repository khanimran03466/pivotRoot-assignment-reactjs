const SortLabel = ({ onChange }) => {
  return (
    <div className="sort-lebal">
      Sort by :{" "}
      <select onChange={(e) => onChange(e)}>
        <option value="relevance">Relevance </option>
        <option value="lh">Price low to high</option>
        <option value="hl">Price high to low</option>
      </select>
    </div>
  );
};

export default SortLabel;

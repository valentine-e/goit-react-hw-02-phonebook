export const Filter = ({ filter, onFilterType }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        placeholder="Search..."
        onChange={e => {
          onFilterType(e.target.value);
        }}
      ></input>
    </div>
  );
};

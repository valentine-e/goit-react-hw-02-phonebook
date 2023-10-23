import { SearchInput, SearchInputBox } from './Filter.styled';

export const Filter = ({ filter, onFilterType }) => {
  return (
    <SearchInputBox>
      <SearchInput
        type="text"
        value={filter}
        placeholder="Search someone..."
        onChange={e => {
          onFilterType(e.target.value);
        }}
      ></SearchInput>
    </SearchInputBox>
  );
};

import PropTypes from "prop-types";
import styled from "styled-components";

export const ExpenseFilter = ({ value, onChange }) => {
  return (
    <Select value={value} onChange={onChange}>
      <option value="outlined">outlined</option>
      <option value="contained">contained</option>
      <option value="Danger">Danger</option>
      <option value="Warning">Warning</option>
    </Select>
  );
};

const Select = styled.select`
  padding: 10px 10px 10px 30px;
  border-radius: 5px;
  font-size: 24px;
  margin-right: 20px;
`;

ExpenseFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

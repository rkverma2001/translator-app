const OutputLan = ({ value, onChange }) => {
  return (
    <select name="target" onChange={onChange} value={value}>
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="ml">Malayalam</option>
      <option value="bn">Bengali</option>
      <option value="ta">Tamil</option>
    </select>
  );
};

export default OutputLan;

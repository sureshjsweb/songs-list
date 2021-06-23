const Select = ({ style, label, setPageSize, noOfItems }) => {
    return (
        <label style={style}>{label}
            <select onChange={(e) => setPageSize(e.target.value)}>
                {
                    noOfItems.map(val => (<option value={val}>{val}</option>))
                }
            </select>
        </label>
    );
}

export default Select;
import { useEffect } from 'react';

const Select = ({ style, label, setPageSize, noOfItems, dValue }) => {

    useEffect(() => {
        setPageSize(dValue);
    }, [])

    return (
        <label style={style}>{label}
            <select onChange={(e) => setPageSize(e.target.value)} defaultValue={dValue}>
                {
                    noOfItems.map(val => (<option key={val} value={val}>{val}</option>))
                }
            </select>
        </label>
    );
}

export default Select;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/fontawesome-free-solid';
import { useState, useEffect } from 'react';
import "./Filter.css";

const Filter = ({ sort, pageItem, setPageItem }) => {
    const [filter, setFilter] = useState(false);

    useEffect(() => {

    }, [filter]);

    return (
        <span style={{
            display: 'inline-flex', flexDirection: 'column', position: 'relative', top: '-5px'
        }}>
            <span style={{ width: '10px', height: '6px', marginBottom: '4px' }}><FontAwesomeIcon icon={faCaretUp} className="filter-pointer" onClick={() => {
                pageItem = [...pageItem.sort(sort)];
                setPageItem(pageItem);
            }} /></span>
            <span style={{ width: '10px', height: '6px', marginTop: '4px' }}><FontAwesomeIcon icon={faCaretDown} className="filter-pointer" onClick={() => {
                pageItem = [...pageItem.sort(sort)];
                setPageItem(pageItem.reverse());
            }} /></span>
        </span>
    );
}

export default Filter;
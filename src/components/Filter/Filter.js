import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/fontawesome-free-solid';
import { useState, useEffect } from 'react';
import "./Filter.css";

const Filter = ({ sort, pageItem, setPageItem }) => {
    const [filter, setFilter] = useState('');

    useEffect(() => {

    }, [filter]);

    return (
        <span style={{
            display: 'inline-flex', flexDirection: 'column', position: 'relative', top: '-5px'
        }}>
            <span style={{ width: '10px', height: '6px', marginBottom: '4px', color: (filter === 'UP') ? 'green' : 'lightgrey' }}><FontAwesomeIcon icon={faCaretUp} className="filter-pointer" onClick={() => {
                setFilter('UP');
                pageItem = [...pageItem.sort(sort)];
                setPageItem(pageItem);
            }} /></span>
            <span style={{ width: '10px', height: '6px', marginTop: '4px', color: (filter === 'DOWN') ? 'green' : 'lightgrey' }}><FontAwesomeIcon icon={faCaretDown} className="filter-pointer" onClick={() => {
                setFilter('DOWN');
                pageItem = [...pageItem.sort(sort)];
                setPageItem(pageItem.reverse());
            }} /></span>
        </span>
    );
}

export default Filter;
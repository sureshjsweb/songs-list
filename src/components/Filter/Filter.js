import { useState, useEffect } from 'react';
import "./Filter.css";

const Filter = ({ sort, pageItem, setPageItem }) => {
    const [filter, setFilter] = useState(false);

    useEffect(() => {

    }, [filter]);

    return (
        <>
            {
                filter ? <span className="filter-pointer"
                    onClick={() => {
                        pageItem = [...pageItem.sort(sort)];
                        setPageItem(pageItem);
                        setFilter(!filter)
                    }}>&and;</span> : <span className="filter-pointer"
                        onClick={() => {
                            pageItem = [...pageItem.sort(sort)];
                            setPageItem(pageItem.reverse());
                            setFilter(!filter)
                        }}>&or;</span>
            }
        </>
    );
}

export default Filter;